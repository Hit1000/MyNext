'use client';
import Tester from "../_comp/page";

function getrandomInt(max: number) {
    return Math.floor(Math.random() * max);
}
function Contacts() {
    const rand = getrandomInt(2);
    console.log(rand);
    if(rand === 1){
        throw new Error("Random error occurred!");
    }
    return(
    <>
        <Tester />
        <div>Contacts</div>
        <div>{rand}</div>
    </>)
}

export default Contacts;