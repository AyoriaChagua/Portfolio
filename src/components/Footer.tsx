'use client'
import { Footer as FooterPage } from "flowbite-react"
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs"

function Footer() {
    return (
        <FooterPage container className="bg-transparent">
            <div className="w-full px-2 sm:px-3 md:px-4 lg:px-32 mt-52 mb-10 text-xl">
                <div className="grid w-full justify-between sm:flex sm:justify-between ms:flex md:grid-cols-1">
                    <div>
                        <FooterPage.Brand
                            alt="AyoriaXCh Logo"
                            href="/"
                            src="/images/introduce/about.png"
                            className="text-gray-500 w-32 h-32"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <FooterPage.Title title="About" />
                            <FooterPage.LinkGroup col className="font-thin">
                                <FooterPage.Link href="#about" >
                                    AyoriaXCh
                                </FooterPage.Link>
                                <FooterPage.Link href="#projects" >
                                    Projects
                                </FooterPage.Link>
                            </FooterPage.LinkGroup>
                        </div>

                        <div>
                            <FooterPage.Title title="Legal" />
                            <FooterPage.LinkGroup col className="font-thin">
                                <FooterPage.Link href="#" >
                                    Privacy Policy
                                </FooterPage.Link>
                                <FooterPage.Link href="#" >
                                    Terms & Conditions
                                </FooterPage.Link>
                            </FooterPage.LinkGroup>
                        </div>
                        <div>
                            <FooterPage.Title title="Contact me" />
                            <FooterPage.LinkGroup col className="font-thin">
                                <FooterPage.Link href="#" >
                                    +51 933 374 956
                                </FooterPage.Link>
                                <FooterPage.Link href="#" >
                                    ayoriachagua@gmail.com
                                </FooterPage.Link>
                            </FooterPage.LinkGroup>
                        </div>
                    </div>
                </div>
                <FooterPage.Divider className="my-10 h-0.5 bg-red-600" />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <FooterPage.Copyright
                        by=" AyoriaXCh™"
                        href="#"
                        year={2023}
                    />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <FooterPage.Icon
                            href="https://m.facebook.com/profile.php/?id=100007533853986&name=xhp_nt__fb__action__open_user"
                            target="_blank"
                            icon={BsFacebook}
                        />
                        <FooterPage.Icon
                            href="https://www.instagram.com/edisxnraulg/"
                            target="_blank"
                            icon={BsInstagram}
                        />
                        <FooterPage.Icon
                            href="https://github.com/AyoriaChagua"
                            target="_blank"
                            icon={BsGithub}
                        />
                        <FooterPage.Icon
                            href="https://www.linkedin.com/in/ayoriachagua/"
                            target="_blank"
                            icon={BsLinkedin}
                        />
                    </div>
                </div>

            </div>
        </FooterPage>
    )
}

export default Footer