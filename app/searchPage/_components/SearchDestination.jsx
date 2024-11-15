'use client'


export const SearchDestination = () => {
  return (
    <div className="flex justify-center items-center">
      <input 
        type="text"
        placeholder="Destination"
        className="border-2 text-timberwolf bg-fernGreen mt-10 p-2 rounded-lg w-auto placeholder:text-timberwolf"
       />
    </div>
  )
}