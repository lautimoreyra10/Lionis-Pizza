import { MenuItem } from "@/components/menu/MenuItem";
import Image from "next/image";
export const HomeMenu = () => {
    return (
        <section className="py-10">
            <div className="absolute left-0 right-0 w-full justify-start top-">
                <div className="absolute -left-10 -top-[70px] text-left -z-10">
                    <Image src={'/tomato.png'} width={300} height={300} alt={'tomato'} />
                </div>
                <div className="absolute -top-[100px] -right-10 -z-10">
                    <Image src={'/tomato.png'} width={300} height={300} alt={'tomato'} />
                </div>
            </div>
            <div className="text-center">
                <h3 className="uppercase text-gray-500 font-semibold leading-4">
                    Check out
                </h3>
                <h2 className="text-primary font-bold text-4xl italic">
                    Menu
                </h2>
            </div>
            <div className="grid grid-cols-3 mx-5 gap-4 py-4">
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
            </div>
        </section>
    );
}