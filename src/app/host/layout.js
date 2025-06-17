import HostNav from "./components/Hostnav"

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