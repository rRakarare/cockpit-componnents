
function Page() {

  // const {id} = useParams<{id: string}>();

  // const imageChat = imageChats.find((chat) => chat._id === id);

  return (
    <div className="flex flex-col h-screen">
      <div className="my-topbar pb-4 size-full overflow-y-auto flex items-center justify-center flex-col space-y-4">
        <div className="border p-4 rounded-xl shadow-sm">
        Create a surreal landscape with floating islands and a purple sky
        </div>
        <div className="flex">
        <img className="object-fit p-4 size-96 shadow-sm m-4 hover:scale-110 transition-all border" src={"https://picsum.photos/700/700"}/>
        <img className="object-fit p-4 size-96 shadow-sm m-4 hover:scale-110 transition-all border" src={"https://picsum.photos/700/700"}/>
        </div>
      </div>
    </div>
  );
}

export default Page;
