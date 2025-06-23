import HostNav from "./components/Hostnav"
import "../server"

export default function DashboardLayout({
    children,
}){
    return(
        <section>
            <HostNav/>
            {children}
        </section>
    )
}