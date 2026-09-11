

const AvailableTech = ({ techs}) => {
    console.log(techs,'techs from available techs')
    return (
        <div>
            {
                techs.map((tech)=>{
                    return <div>
                       {tech.name} 
                    </div>
                })
            }
        </div>
    );
};

export default AvailableTech;