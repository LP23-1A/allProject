import Location from "@/components/Location";
import Dot from "@/components/Icons/Dot";
import Sagar from "./Sagar";
import Git from "./Icons/git";
import Twitter from "./Icons/twitter";
import Figma from "./Icons/figma";

const Contents = () => {
    return (
    <div className="body flex mx-auto max-w-7xl py-24 text-lg justify-between max-md:flex-col-reverse max-md:p-5">
        <div className="information flex flex-col gap-24 max-w-4xl max-md:flex-col">
            <div className="info flex flex-col gap-5">
                <h2 className="text-6xl">Hi, I’m Sagar 👋</h2>
                <p>
                I'm a full stack developer (React.js & Node.js) with a focus on
                creating (and occasionally designing) exceptional digital
                experiences that are fast, accessible, visually appealing, and
                responsive. Even though I have been creating web applications
                for over 7 years, I still love it as if it was something new.
                </p>
            </div>
            <div className="loca flex flex-col gap-3">
                <p className="font-size flex items-center gap-2">
                    <Location /> Ahmedabad, India
                </p>
                <p className="font-size flex items-center gap-3">
                    <Dot /> Available for new projects
                </p>
            </div>
            <div className="icons flex items-center">
                <Git />
                <Twitter />
                <Figma />
            </div>
        </div>
        <div className="picture max-md:py-7">
            <div className="relative h-[260px] w-[250px] top-12 bg-zinc-300 max-md:top-[-25px] max-md:mx-auto max-md:w-[280px]" onClick={BLock}><Sagar /></div>
        </div>
    </div>
    )
}
export default Contents