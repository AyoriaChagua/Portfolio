'use client'
import Image from "next/image"
import Button from "./Button"
import TextWriter from "./TextWriter"
import perfil from "@/../public/images/introduce/perfil.png"
import useDownloader from "react-use-downloader";

function ProfileHeader() {
    const texts: string[] = ["I'm a Software Developer", "Passionate about technology and I love what I do"]
    const { download } = useDownloader();
    const cvUrl = "/docs/CV-Ayoria.docx"
    const filename = "CV-Ayoria.docx"
    const abrirVentanaWhatsApp = () => {
        const numeroDestino = '933374956';
        const mensaje = 'Hola Ayoria! quisiera hablar contigo, gracias.';
        let urlWhatsApp = `https://wa.me/${numeroDestino}`;
        if (mensaje) {
            urlWhatsApp += `?text=${encodeURIComponent(mensaje)}`;
        }
        window.open(urlWhatsApp, '_blank');
    };

    return (
        <div className="flex flex-col items-center justify-center space-y-12 mt-12">
            <div className="w-40 h-40 lg:w-56 lg:h-56 relative ">
                <Image src={perfil} alt="AyoriaXCh" className="w-full  object-cover absolute top-[-20%]" />
            </div>
            <h2 className="text-3xl font-mono text-center">Designer, DevOps & Software developer</h2>
            <TextWriter className="text-red-500 lg:text-xl" text={texts} speed={100} delay={1500} loop={false} />
            <div className="space-x-6">
                <Button text="Download CV" type="secondary" onClick={() => download(cvUrl, filename)} />
                <Button text="Write me" type="primary" onClick={abrirVentanaWhatsApp} />
            </div>
        </div>
    )
}

export default ProfileHeader