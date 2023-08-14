

const fetchApi = async()=>{
  const res = await fetch(`${process.env.HOST_NAME}/api/`)
  const response = await res.json()
  return response

}



export default async function Home() {
  var message:TestResponse;
const runServer = async ()=>{
  message = await fetchApi();
  return message;
}
message = await runServer();
  return (
    <>
    this is a test
    <br />
    <>{message.message || ' string'}</>
    </>
  )
}
