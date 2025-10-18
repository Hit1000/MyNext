import Link from "next/link";

function archiveNotification() {
  return (
    <div className='items-center text-center w-full h-full'>
      <div>archive notification</div>
      <Link className='text-blue-500 hover:underline' href="/complex">Default</Link>
    </div>
  );
}

export default archiveNotification;
