const bars = document.querySelector("#bars");
const icon = document.querySelector("#bars > i")
 
const openNav = () => {
    document.querySelector("nav > ul").classList.toggle("show");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");
    const expanded = bars.getAttribute('aria-expanded') === 'true';
    bars.setAttribute('aria-expanded', expanded ? 'false' : 'true');
    const label = bars.getAttribute('aria-label') === 'åben navigation';
    bars.setAttribute('aria-label', label ? 'luk navigation' : 'åben navigation');
}
 
bars.addEventListener("click", openNav);