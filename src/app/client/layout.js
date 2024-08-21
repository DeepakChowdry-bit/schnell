import ClientNav from "@/components/ClientNav";
import Footer from "@/components/Footer";


export default function Layout({ children }) {
    return (
        <>
            <main><ClientNav />{children}</main>
        </>
    )
}