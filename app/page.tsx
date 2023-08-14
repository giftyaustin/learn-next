

const fetchApi = async()=>{
  const res = await fetch(`${process.env.HOST_NAME}/api/`)
  const response = await res.json()
  return response

}



export default function Home() {
  let message = ''
  const runServerFunction = async()=>{
    message = await fetchApi()
  }
  runServerFunction();

  return (
    <>
    {message}
    </>
  )
}
