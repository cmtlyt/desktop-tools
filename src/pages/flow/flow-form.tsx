import { forwardRef, useEffect, useImperativeHandle } from 'react';
import { Form, FormInstance, FormItemProps, Input, InputNumber, InputProps, Select } from 'antd';
import styled from 'styled-components';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { isUndef, TAnyFunc } from '@cmtlyt/base';
import { useFlowStoreSlice } from './store';
import { useLayoutStoreSlice } from '@/store';
import { logger } from '@/utils';
import { Button, ButtonTheme, FlexBox, FlexDirection } from '@/components/base';
import { ACCOUNT_TYPE, FLOW_CATEGORY, FLOW_STATUS, OptionItem } from './constant';
import { EditorFlow } from '@/types/flow';

export enum PageStatus {
  CREATE = 'create',
  EDITOR = 'editor',
  VIEW = 'view',
}

interface FlowFormProps {
  pageStatus?: PageStatus;
  onFinish?: (values: EditorFlow) => void;
}

// const onFinish = (values: unknown) => {
//   console.log('Received values of form:', values);
// };

function filterOption(inputValue: string, option?: unknown) {
  const _option = option as OptionItem;
  if (!_option) return true;
  return _option.label.includes(inputValue) || _option.alias.includes(inputValue);
}

const FieldWrapper = styled(Form.Item)`
  margin-bottom: 0;
`;

const InputNumberField = styled(InputNumber)`
  flex: 1;
`;

const InputField = styled(Input)`
  flex: 3;
`;

const SelectField = styled(Select)`
  flex: 1;
`;

interface InputFieldProps extends FormItemProps {
  placeholder?: string;
  type?: InputProps['type'];
}

function InputFieldWrapper(props: InputFieldProps) {
  const { type, placeholder, ...restProps } = props;
  return (
    <FieldWrapper {...restProps}>
      {type === 'number' ? (
        <InputNumberField placeholder={placeholder} />
      ) : (
        <InputField placeholder={placeholder} type={type} />
      )}
    </FieldWrapper>
  );
}

const FormWrapper = styled(Form)`
  margin: 0 auto;
  padding: 2.4rem;
  width: 70%;
`;

const labelSpan = 3;

export interface FlowFormRef {
  form: FormInstance<EditorFlow>;
}

export const FlowForm = forwardRef<FlowFormRef, FlowFormProps>(function FlowForm(props, ref) {
  const { pageStatus, onFinish } = props;
  const { currentFlow: flow } = useFlowStoreSlice('currentFlow');
  const { showMessage } = useLayoutStoreSlice('showMessage');
  const [form] = Form.useForm();

  useImperativeHandle(ref, () => ({ form }), [form]);

  useEffect(() => {
    if (isUndef(flow) && pageStatus !== PageStatus.CREATE) {
      logger.error('非法访问');
      showMessage({ type: 'error', content: '非法访问, 系统将会记录本次访问' });
    }
  }, [flow, showMessage, pageStatus]);

  useEffect(() => {
    form.setFieldsValue({
      ...flow,
      amountDistributions: flow?.amountDistributions.length ? flow.amountDistributions : [{}],
    });
  }, [form, flow]);

  return (
    <FormWrapper
      name="flow-form"
      form={form}
      autoComplete="off"
      onFinish={onFinish as TAnyFunc}
      labelCol={{ span: labelSpan }}
      clearOnDestroy
    >
      <FlexBox $gap="1.4" $direction={FlexDirection.column}>
        <InputFieldWrapper
          name="title"
          label="标题"
          rules={[{ required: true, message: '请输入标题' }]}
          placeholder="请输入标题"
        />
        <InputFieldWrapper name="desctription" label="描述" rules={[{ required: false }]} placeholder="请输入描述" />
        <FieldWrapper name="category" label="类别" rules={[{ required: true, message: '请选择类别' }]}>
          <SelectField showSearch placeholder="请选择流水类别" filterOption={filterOption} options={FLOW_CATEGORY} />
        </FieldWrapper>
        <FieldWrapper name="status" label="状态" rules={[{ required: true, message: '请选择状态' }]}>
          <SelectField showSearch placeholder="请选择流水状态" filterOption={filterOption} options={FLOW_STATUS} />
        </FieldWrapper>
        <FieldWrapper label="变更帐户" required>
          <Form.List name="amountDistributions">
            {(fields, { add, remove }) => (
              <FlexBox $gap="1.4" $direction={FlexDirection.column}>
                {fields.map(({ key, name, ...restField }) => (
                  <FlexBox key={key} $gap="1">
                    <FieldWrapper
                      noStyle
                      {...restField}
                      name={[name, 'account']}
                      rules={[{ required: true, message: '请选择变更帐户' }]}
                    >
                      <SelectField
                        showSearch
                        placeholder="请选择变更帐户"
                        filterOption={filterOption}
                        options={ACCOUNT_TYPE}
                      />
                    </FieldWrapper>
                    <InputFieldWrapper
                      noStyle
                      {...restField}
                      type="number"
                      name={[name, 'amount']}
                      rules={[{ required: true, message: '请输入金额' }]}
                      placeholder="请输入金额"
                    />
                    <InputFieldWrapper noStyle name={[name, 'remark']} placeholder="请输入备注" />
                    {fields.length > 1 && <MinusCircleOutlined onClick={() => remove(name)} />}
                  </FlexBox>
                ))}
                <FieldWrapper>
                  <Button type="button" onClick={() => add()} $presetTheme={ButtonTheme.INFO}>
                    <FlexBox $gap="0.4">
                      <PlusOutlined />
                      <span>添加帐户</span>
                    </FlexBox>
                  </Button>
                </FieldWrapper>
              </FlexBox>
            )}
          </Form.List>
        </FieldWrapper>
      </FlexBox>
    </FormWrapper>
  );
});

/**
 * 标题 (用于展示在列表中的部分, 例如: 吃了螺狮粉)
 * 描述? (用于展示在详情页中的部分, 例如: 和xxx吃的因为他之前也请了我)
 * 类别 (例如: 餐饮, 网购, 红包)
 * 状态
 * {帐户, 金额, 备注}[]
 * 时间
 */
