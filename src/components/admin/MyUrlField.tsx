import { useRecordContext } from "react-admin";
import { Link } from "react-router";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";

const MyUrlField = ({ source }: { source: string }) => {
  const record = useRecordContext();
  return record ? (
    <Link to={record[source]} className="text-blue-500 no-underline">
      {record[source]}
      <ArrowUpRightIcon className="size-6 h-4 w-4 inline ml-1" />
    </Link>
  ) : null;
};

export default MyUrlField;
