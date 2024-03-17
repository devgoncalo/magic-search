import { redirect } from "next/navigation";

interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

const Page = ({ searchParams }: PageProps) => {
  const query = searchParams.query;

  if (Array.isArray(query)) {
    return redirect("/");
  }

  // TODO: Querying Logic

  return <div>Search</div>;
};

export default Page;
