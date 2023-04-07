import logoPath from '../../src/images/header-logo.svg';

export default function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={logoPath} alt="Место"/>
        </header>
    )
}
