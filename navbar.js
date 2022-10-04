var nav = true;

function toggleNavBar()
{
    nav = !nav;

    // Show/Remove links
    if (!nav)
    {
        document.getElementById("nav-links").style.display = "none";
    }
    else
    {
        document.getElementById("nav-links").style.display = "inline";
    }
}