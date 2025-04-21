export const Box = (props) => {
    return (
       <div className=" flex flex-col bg-neutral-100 text-neutral-700 border-1">
             <img src={props.image} alt="image" className="size-20 border-b-2"/>
             <div className="w-16 text-[15px]">
                   {props.description} 
             </div>
       </div> 
    )
}




