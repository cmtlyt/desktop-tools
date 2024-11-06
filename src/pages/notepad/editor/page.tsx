import { useLoaderData } from 'react-router-dom';

export function Component() {
  const loaderData = useLoaderData() as LoaderData;

  return (
    <div>
      {loaderData.id ? '编辑' : '新建'}笔记: {loaderData.id}
    </div>
  );
}

export const handle = {
  title: '编辑笔记',
  crumbLabel: '编辑',
  needBackIcon: true,
};

interface LoaderParams {
  params: {
    id?: string;
  };
}

export interface LoaderData {
  id?: string;
}

export async function loader({ params }: LoaderParams): Promise<LoaderData> {
  return {
    id: params.id,
  };
}
