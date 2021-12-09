function navBar() {
    var x = document.getElementById("navbar");
    if (x.className === "menu") {
        x.className += " responsive";
    } else {
        x.className = "menu";
    }
}

function showHome() {
    document.getElementById("myHome").style.display = 'block';
    document.getElementById("myAbout").style.display = 'none';
    document.getElementById("myCourses").style.display = 'none';
    document.getElementById("myCV").style.display = 'none';
    document.getElementById("myProjects").style.display = 'none';
    document.getElementById("myLogin").style.display = 'none';
    document.getElementById("mySignUp").style.display = 'none';
}

function showAbout() {
    document.getElementById("myAbout").style.display = 'block';
    document.getElementById("myHome").style.display = 'none';
    document.getElementById("myCourses").style.display = 'none';
    document.getElementById("myCV").style.display = 'none';
    document.getElementById("myProjects").style.display = 'none';
    document.getElementById("myLogin").style.display = 'none';
    document.getElementById("mySignUp").style.display = 'none';
}

function showCourses() {
    document.getElementById("myCourses").style.display = 'block';
    document.getElementById("myAbout").style.display = 'none';
    document.getElementById("myHome").style.display = 'none';
    document.getElementById("myCV").style.display = 'none';
    document.getElementById("myProjects").style.display = 'none';
    document.getElementById("myLogin").style.display = 'none';
    document.getElementById("mySignUp").style.display = 'none';
}

function showCV() {
    document.getElementById("myCV").style.display = 'block';
    document.getElementById("myAbout").style.display = 'none';
    document.getElementById("myCourses").style.display = 'none';
    document.getElementById("myHome").style.display = 'none';
    document.getElementById("myProjects").style.display = 'none';
    document.getElementById("myLogin").style.display = 'none';
    document.getElementById("mySignUp").style.display = 'none';
}

function showProjects() {
    document.getElementById("myProjects").style.display = 'block';
    document.getElementById("myAbout").style.display = 'none';
    document.getElementById("myCourses").style.display = 'none';
    document.getElementById("myCV").style.display = 'none';
    document.getElementById("myHome").style.display = 'none';
    document.getElementById("myLogin").style.display = 'none';
    document.getElementById("mySignUp").style.display = 'none';
}

function showLogin() {
    document.getElementById("myProjects").style.display = 'none';
    document.getElementById("myAbout").style.display = 'none';
    document.getElementById("myCourses").style.display = 'none';
    document.getElementById("myCV").style.display = 'none';
    document.getElementById("myHome").style.display = 'none';
    document.getElementById("myLogin").style.display = 'block';
    document.getElementById("mySignUp").style.display = 'none';

}

function showSignUp() {
    document.getElementById("myProjects").style.display = 'none';
    document.getElementById("myAbout").style.display = 'none';
    document.getElementById("myCourses").style.display = 'none';
    document.getElementById("myCV").style.display = 'none';
    document.getElementById("myHome").style.display = 'none';
    document.getElementById("myLogin").style.display = 'none';
    document.getElementById("mySignUp").style.display = 'block';
}



if (!location.hash) {
	location.hash = "#home";
    showHome();
}