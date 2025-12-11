import chefSunnyLogo from "./assets/chef-sunny-icon.png"

export default function Header() {
    return (
        <header>
            <img src={chefSunnyLogo}/>
            <h1>Chef Sunny</h1>
        </header>
    )
}