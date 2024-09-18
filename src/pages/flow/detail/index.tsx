import { useLoaderData } from 'react-router-dom';

interface LoaderData {
  id: string;
}

export function Component() {
  const data = useLoaderData() as LoaderData;

  return <div>flow detail id: {data.id}</div>;
}

interface LoaderParams {
  params: Params;
}

interface Params {
  id: string;
}

export async function loader({ params }: LoaderParams): Promise<LoaderData> {
  return {
    id: params.id,
  };
}

export const handle = {
  title: '详情',
};
