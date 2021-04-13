function Main() {
    //Horned beasts soon

    return <HornedBeasts title={'UniWhale'} description="Description Soon" />

}

function HornedBeasts(props) {
    // const title = 'Horned Beast Title Soon';
    return (
        <div>
            <h2>{props.title}</h2>
            <img src={"./img/hornedbeast.jpg"} alt={"Unichorn"} title={"Unichorn"} />
            <p>{props.description}</p>
            <h2>{props.title}</h2>
            <img src={"./img/hornedbeast.jpg"} alt={"Other Horned Beast"} title={"Other"} />
            <p>{props.description}</p>
        </div>
    );
}
export default Main;