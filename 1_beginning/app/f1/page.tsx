import Link from "next/link";

function f1() {
  return (
    <div>
      f1
      <div className="text-blue-400 underline">
        <Link href="/f1/f2"> Go to f2</Link>
      </div>
    </div>
  );
}

export default f1;
