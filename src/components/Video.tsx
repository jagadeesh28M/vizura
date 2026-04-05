export const Video = ({link}:{link : string}) =>{
    return(
        <div className="flex justify-center items-center w-auto h-auto">
                <video src={link} className="rounded-lg" height={500} width={500} controls autoPlay loop muted />
        </div>
    )
}