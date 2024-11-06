import { useLoaderData } from 'react-router-dom';

export function Component() {
  const loaderData = useLoaderData() as LoaderData;

  return <div>预览笔记: {loaderData.id}</div>;
}

export const handle = {
  title: '预览笔记',
  crumbLabel: '预览',
  needBackIcon: true,
};

interface LoaderParams {
  params: {
    id: string;
  };
}

export interface LoaderData {
  id: string;
}

export async function loader({ params }: LoaderParams): Promise<LoaderData> {
  return {
    id: params.id,
  };
}
