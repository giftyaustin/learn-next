'use client'

const fetchApi = async()=>{
  const res = await fetch("/api/")
  const response = await res.json()
  return response

}



export default function Home() {
  // const {message} = await fetchApi()
  let response:any = ''
  const func = async()=>{
    const res = await fetch("/api/")
    console.log(res)
    response = await res.json()
    console.log(response)
  }
  func();

  return (
    <>
    {/* {console.log(response)} */}
    </>
  )
}
