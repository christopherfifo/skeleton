import "./styele.css"

type props = {
    width: number | string;
    height: number | string;
    borderRadius?: number ;
}


function Skeleton({ width, height, borderRadius }: props) {
    return (
        <div className="container" style={{ width, height, borderRadius}}></div>
    )
}

export default Skeleton;