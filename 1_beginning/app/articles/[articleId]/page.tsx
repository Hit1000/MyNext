import Link from "next/link";
async function page({
  params,
  searchParams,
} : {
  params: Promise<{
    articleId: string
  }>,
  searchParams: Promise<{
    lang?: "en" | "es" | "fr"
  }>; 
}) {
  const articleId = (await params).articleId;
  const lang = (await searchParams).lang;
  return (
    <div>
        <h1>news article {articleId}</h1>
        <p>This is the news article</p>
        <p>reading in {lang}</p>
        <div className="flex gap-4 text-blue-700">
            <Link href={`/articles/${articleId}?lang=en`}>English</Link>
            <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
            <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
        </div>
    </div>
  )
}

export default page