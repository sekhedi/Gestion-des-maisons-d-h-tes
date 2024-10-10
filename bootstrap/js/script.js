//fonction registerclient
function registerClient() {
    var firstName = document.getElementById("firstName").value;
    var isFNValid = checkLenght(firstName, 3);
    controleSaisie(isFNValid, "firstnameError", "firstName should>=3");

    var lastName = document.getElementById("lastName").value;
    var isLNValid = checkLenght(lastName, 3);
    controleSaisie(isLNValid, "lastnameError", "lastName should>=2");

    var email = document.getElementById("email").value;
    var tabuser = JSON.parse(localStorage.getItem("users") || "[]");
    var isemailValid = true;
    for (let i = 0; i < tabuser.length; i++) {
        if (tabuser[i].email == email) {
            document.getElementById("emailError").innerHTML = "this email already exists";
            document.getElementById("emailError").style.color = "red";
            isemailValid = false;
            break;
        } else {
            document.getElementById("emailError").innerHTML = "";
            isemailValid = true;
        }

    }
    var password = document.getElementById("pwd").value;
    var isPWvalid = checkLenght(password, 6);
    controleSaisie(isPWvalid, "paswordError", "pasword should>=6");

    var adress = document.getElementById("adress").value;
    var tel = document.getElementById("tel").value;
    var isConfirmedtel = confirmedTel(tel, 8);
    controleSaisie(isConfirmedtel, "verificationTel", "numero tel different a 8 chifre");

    //creation objet et enregistre si la condition vrai
    if (isFNValid && isLNValid && isConfirmedtel && isPWvalid && isemailValid) {


        //console.log("name",firstName);

        //creation objet
        var user = {
            id: generateID(tabuser),
            firstName: firstName,
            lastName: lastName,
            email: email,
            tel: tel,
            adress: adress,
            password: password,
            status: "valid",
            role: "client"
        }
        //console.log(objet);
        //save into ls, enregistrement dans local storage
        //var tabuser = JSON.parse(localStorage.getItem("users") || "[]");
        tabuser.push(user);
        localStorage.setItem("users", JSON.stringify(tabuser));
    }
    location.reload();
}
//fonction registerOwner
function registerOwner() {
    var firstName = document.getElementById("firstName").value;
    var isFNValid = checkLenght(firstName, 3);
    controleSaisie(isFNValid, "firstnameError", "firstName should>=3");

    var lastName = document.getElementById("lastName").value;
    var isLNValid = checkLenght(lastName, 3);
    controleSaisie(isLNValid, "lastnameError", "lastName should>=2");

    var email = document.getElementById("email").value;
    var tabuser = JSON.parse(localStorage.getItem("users") || "[]");
    var isemailValid = true;
    for (let i = 0; i < tabuser.length; i++) {
        if (tabuser[i].email == email) {
            document.getElementById("emailError").innerHTML = "this email already exists";
            document.getElementById("emailError").style.color = "red";
            isemailValid = false;
            break;
        } else {
            document.getElementById("emailError").innerHTML = "";
            isemailValid = true;
        }

    }
    var password = document.getElementById("pwd").value;
    var isPWvalid = checkLenght(password, 6);
    controleSaisie(isPWvalid, "paswordError", "pasword should>=6");

    var adress = document.getElementById("adress").value;
    var tel = document.getElementById("tel").value;
    var isConfirmedtel = confirmedTel(tel, 8);
    controleSaisie(isConfirmedtel, "verificationTel", "numero tel different a 8 chifre");

    //creation objet et enregistre si la condition vrai
    if (isFNValid && isLNValid && isConfirmedtel && isPWvalid && isemailValid) {


        //console.log("name",firstName);

        //creation objet
        var user = {
            id: generateID(tabuser),
            firstName: firstName,
            lastName: lastName,
            email: email,
            tel: tel,
            adress: adress,
            password: password,
            role: "owner",
            status: "not valid"
        }
        //console.log(objet);
        //save into ls, enregistrement dans local storage
        //var tabuser = JSON.parse(localStorage.getItem("users") || "[]");
        tabuser.push(user);
        localStorage.setItem("users", JSON.stringify(tabuser));
    }
    location.reload();
}
//fonction registerAdmin
function registerAdmin() {
    var firstName = document.getElementById("firstName").value;
    var isFNValid = checkLenght(firstName, 3);
    controleSaisie(isFNValid, "firstnameError", "firstName should>=3");

    var lastName = document.getElementById("lastName").value;
    var isLNValid = checkLenght(lastName, 3);
    controleSaisie(isLNValid, "lastnameError", "lastName should>=2");

    var email = document.getElementById("email").value;
    var tabuser = JSON.parse(localStorage.getItem("users") || "[]");
    var isemailValid = true;
    for (let i = 0; i < tabuser.length; i++) {
        if (tabuser[i].email == email) {
            document.getElementById("emailError").innerHTML = "this email already exists";
            document.getElementById("emailError").style.color = "red";
            isemailValid = false;
            break;
        } else {
            document.getElementById("emailError").innerHTML = "";
            isemailValid = true;
        }

    }
    var password = document.getElementById("pwd").value;
    var isPWvalid = checkLenght(password, 6);
    controleSaisie(isPWvalid, "paswordError", "pasword should>=6");

    var adress = document.getElementById("adress").value;
    var tel = document.getElementById("tel").value;
    var isConfirmedtel = confirmedTel(tel, 8);
    controleSaisie(isConfirmedtel, "verificationTel", "numero tel different a 8 chifre");

    //creation objet et enregistre si la condition vrai
    if (isFNValid && isLNValid && isConfirmedtel && isPWvalid && isemailValid) {


        //console.log("name",firstName);

        //creation objet
        var user = {
            id: generateID(tabuser),
            firstName: firstName,
            lastName: lastName,
            email: email,
            tel: tel,
            adress: adress,
            password: password,
            role: "admin"
        }
        //console.log(objet);
        //save into ls, enregistrement dans local storage
        //var tabuser = JSON.parse(localStorage.getItem("users") || "[]");
        tabuser.push(user);
        localStorage.setItem("users", JSON.stringify(tabuser));
    }
    location.reload();
}
// fonction login pour le connexion d'un user
function login() {
    var email = document.getElementById("emailLogin").value;
    var pasword = document.getElementById("passwordLogin").value;
    //controle de saisie
    if (email == "" || pasword == "") {
        document.getElementById("loginErreur").innerHTML = "please check email/pswrd or new account ";
        document.getElementById("loginErreur").style.color = "red";
    }

    //recuperation tous les utilisateurs de ls
    var usertab = JSON.parse(localStorage.getItem("users" || "[]"));
    var fonduser = {};
    for (let i = 0; i < usertab.length; i++) {
        if (usertab[i].email == email && usertab[i].password == pasword) {
            fonduser = usertab[i];
            break;

        }
    }

    //console.log(fonduser);
    if (fonduser.role == "client") {
        localStorage.setItem("connectedUserID", fonduser.id);
        location.replace("index-5.html");
    }
    else if (fonduser.role == "admin") {
        localStorage.setItem("connectedUserID", fonduser.id);
        location.replace("admin.html");
    } else {
        if (fonduser.status == "valid") {
            localStorage.setItem("connectedUserID", fonduser.id);
            location.replace("user-properties.html");
        } else {
            document.getElementById("loginErreur").innerHTML = "please check email/pswrd or new account ";
            document.getElementById("loginErreur").style.color = "red";
        }
    }
}
// fnc qui gnerer un header selon etat de conection et role
function generateHeader() {
    var connecteduserid = localStorage.getItem("connectedUserID")
    var founduser = afficheObjetID(connecteduserid, "users");
    var content = "";
    //connected user
    if (connecteduserid) {
        if (founduser.role == "client") {
            content = ` <div class="container">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    
                    <a class="navbar-brand" href=""><img src="assets/img/logo.jpg" alt=""></a>
                </div>

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse yamm" id="navigation">
                    <div class="button navbar-right">
                        <button class="navbar-btn nav-button wow InRight login" data-wow-delay="0.5s"><a href="user-profile.html" style="color: #FCFCFC;">Hello ${founduser.lastName} ${founduser.firstName}</a></button>
                        <button class="navbar-btn nav-button wow fadeInRight" onclick="logout() " data-wow-delay="0.5s">Logout</button>
                    </div>
                    <ul class="main-nav nav navbar-nav navbar-right">
                        <li class="wow fadeInDown" data-wow-delay="0.1s"><a class="" href="index-5.html">Home</a></li>
                        <li class="wow fadeInDown" data-wow-delay="0.1s"><a class="" href="properties.html">Properties</a></li>
                        <li class="wow fadeInDown" data-wow-delay="0.4s"><a href="contact.html">Contact</a></li>
                    </ul>
                </div><!-- /.navbar-collapse -->
            </div>`
        }
        else if (founduser.role == "owner") {
            content = ` <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                
                <a class="navbar-brand" href=""><img src="assets/img/logo.jpg" alt=""></a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse yamm" id="navigation">
                <div class="button navbar-right">
                   
                    <button class="navbar-btn nav-button wow bounceInRight login" data-wow-delay="0.5s" ><a href="user-properties.html" style="color: #FCFCFC;">Hello ${founduser.lastName} ${founduser.firstName}</a></button>
                    <button class="navbar-btn nav-button wow fadeInRight" data-wow-delay="0.5s"><a href="submit-property.html" style="color: #FCFCFC;">Submit Property</a></button>
                    <button class="navbar-btn nav-button wow fadeInRight" onclick=" logout()" data-wow-delay="0.5s">Logout</button>
                    
                </div>
                <ul class="main-nav nav navbar-nav navbar-right">
                    <li class="wow fadeInDown" data-wow-delay="0.1s"><a class="" href="index-5.html">Home</a></li>
                    <li class="wow fadeInDown" data-wow-delay="0.1s"><a class="" href="properties.html">Properties</a></li>
                    <li class="wow fadeInDown" data-wow-delay="0.4s"><a href="contact.html">Contact</a></li>
                </ul>
            </div><!-- /.navbar-collapse -->
        </div>`
        }
        else if (founduser.role == "admin") {
            content = ` <div class="container">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    
                    <a class="navbar-brand" href=""><img src="assets/img/logo.jpg" alt=""></a>
                </div>

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse yamm" id="navigation">
                    <div class="button navbar-right">
                        <button class="navbar-btn nav-button wow bounceInRight login" data-wow-delay="0.5s"><a href="admin.html" style="color: #FCFCFC;">Hello ${founduser.lastName} ${founduser.firstName}</a></button>
                        <button class="navbar-btn nav-button wow fadeInRight" onclick="logout() " data-wow-delay="0.5s">Logout</button>
                    </div>
                    <ul class="main-nav nav navbar-nav navbar-right">
                        <li class="wow fadeInDown" data-wow-delay="0.1s"><a class="" href="index-5.html">Home</a></li>
                        <li class="wow fadeInDown" data-wow-delay="0.1s"><a class="" href="properties.html">Properties</a></li>
                        <li class="wow fadeInDown" data-wow-delay="0.4s"><a href="contact.html">Contact</a></li>
                    </ul>
                </div><!-- /.navbar-collapse -->
            </div>`
        }
    }

    else {
        // not connected
        content = ` <div class="container">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    
                    <a class="navbar-brand" href=""><img src="assets/img/logo.jpg" alt=""></a>
                </div>

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse yamm" id="navigation">
                    <div class="button navbar-right">
                        <button class="navbar-btn nav-button wow bounceInRight login" data-wow-delay="0.5s" ><a href="register.html" style="color: #FCFCFC;" > New Account</a></button>
                        <button class="navbar-btn nav-button wow bounceInRight login" data-wow-delay="0.5s" ><a href="login.html" style="color: #FCFCFC;" >Login</a></button>
                        
                    </div>
                    <ul class="main-nav nav navbar-nav navbar-right">
                        <li class="wow fadeInDown" data-wow-delay="0.1s"><a class="" href="index-5.html">Home</a></li>
                        <li class="wow fadeInDown" data-wow-delay="0.1s"><a class="" href="properties.html">Properties</a></li>
                        <li class="wow fadeInDown" data-wow-delay="0.4s"><a href="contact.html">Contact</a></li>
                    </ul>
                </div><!-- /.navbar-collapse -->
            </div>`
    }
    document.getElementById("headerID").innerHTML = content;

}
//fnc qui supprimer conncteduserid de ls
function logout() {
    localStorage.removeItem("connectedUserID");
    location.replace("index-5.html");
}

// fonction qui affiche le profile de user connecté
function Profile() {
    var Id = localStorage.getItem("connectedUserID");
    var userTab = JSON.parse(localStorage.getItem("users") || "[]");
    var profilesUser = {};
    var content = ``;
    for (let i = 0; i < userTab.length; i++) {
        if (userTab[i].id == Id) {
            profilesUser = userTab[i];
            break;
        }
    }

    content = content + ` <div class="page-head"> 
            <div class="container">
                <div class="row">
                    <div class="page-head-content">
                        <h1 class="page-title">Hello : <span class="orange strong">${profilesUser.lastName} <span class="orange strong">${profilesUser.firstName}</span></span></h1>               
                    </div>
                </div>
            </div>
        </div>
        <div class="content-area user-profiel" style="background-color: #FCFCFC;">&nbsp;
            <div class="container">   
                <div class="row">
                    <div class="col-sm-10 col-sm-offset-1 profiel-container">

                        <form action="" method="">
                            <div class="profiel-header">
                                <h3>
                                    <b>BUILD</b> YOUR PROFILE <br>
                                    <small>This information will let us know more about you.</small>
                                </h3>
                                <hr>
                            </div>

                            <div class="clear">
                                   
                                <div class="col-sm-3 col-sm-offset-1">
                                    <div class="picture-container">
                                        <div class="picture">
                                            <img src="assets/img/avatar.png" class="picture-src" id="wizardPicturePreview" title=""/>
                                            <input type="file" id="wizard-picture">
                                        </div>
                                        <h6>Choose Picture</h6>
                                    </div>
                                </div>

                                <div class="col-sm-3 padding-top-25">

                                    <div class="form-group">
                                        <label>First Name <small>(required)</small></label>
                                        <input name="firstname" type="text" class="form-control" value="${profilesUser.firstName}" id="newfirstname">
                                    </div>
                                    <div class="form-group">
                                        <label>Last Name <small>(required)</small></label>
                                        <input name="lastname" type="text" class="form-control" value="${profilesUser.lastName}" id="newlastname">
                                    </div> 
                                    <div class="form-group">
                                        <label>Email <small>(required)</small></label>
                                        <input name="email" type="email" class="form-control" value="${profilesUser.email}" id="newemail">
                                    </div> 
                                </div>
                                <div class="col-sm-3 padding-top-25">
                                    <div class="form-group">
                                        <label>Phone : <small>(required)</small></label>
                                        <input type="tel" class="form-control" value="${profilesUser.tel}" id="newphone">
                                    </div>
                                    <div class="form-group">
                                        <label>Adress : <small>(required)</small></label>
                                        <input type="text" class="form-control" value="${profilesUser.adress}" id="newadress">
                                    </div>
                                    <div class="form-group">
                                        <label>Password <small>(required)</small></label>
                                        <input name="Password" type="password" class="form-control" value="${profilesUser.password}" id="newpassword">
                
                                    </div>
                                         
                                </div>
                            </div>
                         
                            <div class="col-sm-5 col-sm-offset-1 ">
                                <br><br><br><br><br>
                                <input type='button' class='btn btn-finish btn-primary ' name='finish' value='Update' onclick="UpdateUser(${profilesUser.id})" style="margin-left: 350px  ;" >
                            </div>
                            <br>
                    </form>

                </div>
            </div><!-- end row -->

        </div>
    </div>`
    document.getElementById("profileId").innerHTML = content;
}

//fonction pour ajouter un maison d'hote dans lS
function SubmitProperty() {
    //recuperation la valeurs de l'input entrer par utilisateur

    //controle de saisie
    var propertyName = document.getElementById("propertyName").value;
    var isNamevalid = checkLenght(propertyName, 2);
    controleSaisie(isNamevalid, "propertynaError", "name should>=2");

    var propertyPrice = document.getElementById("propertyPrice").value;
    var isPricevalid = checkNumber(propertyPrice, 0);
    controleSaisie(isPricevalid, "propertyprError", "Price should>0");

    var propertyTel = document.getElementById("propertyTel").value;
    var propertyCountry = document.getElementById("propertyCoun").value;
    var propertyCity = document.getElementById("propertyCit").value;
    var propertyStatue = document.getElementById("propertySta").value;
    var propertyRooms = document.getElementById("propertyRoom").value;
    var propertyBed = document.getElementById("propertyBed").value;
    var propertyM2 = document.getElementById("propertyM2").value;

    var propertyDescription = document.getElementById("propertyDes").value;
    var isDescriptionvalid = false;
    if (propertyDescription == "") {
        document.getElementById("DescriptonError").innerHTML = "please write a description";
        document.getElementById("DescriptonError").style.color = "red";
    }
    else {
        document.getElementById("DescriptonError").innerHTML = "";
        isDescriptionvalid = true;
    }
    //validation
    if (isNamevalid && isPricevalid && isDescriptionvalid) {
        var tabMaisonHote = JSON.parse(localStorage.getItem("MaisonHote") || "[]");
        connectedUserID = getFromLS("connectedUserID");
        //creation objet Maison
        var Maison = {
            id: generateID(tabMaisonHote),
            PropertyName: propertyName,
            PropertyPrice: propertyPrice,
            PropertyTel: propertyTel,
            PropertyDesc: propertyDescription,
            PropertyCountry: propertyCountry,
            PropertyCity: propertyCity,
            PropertyStatue: propertyStatue,
            PropertyRooms: propertyRooms,
            PropertyBed: propertyBed,
            PropertyM2: propertyM2,
            OwnerID: connectedUserID,
        }
        //console.log(objet);
        //save into ls, enregistrement dans local storage
        //var tabProduct = JSON.parse(localStorage.getItem("Products") || "[]");
        tabMaisonHote.push(Maison);
        localStorage.setItem("finishMaisonID", Maison.id);
        localStorage.setItem("MaisonHote", JSON.stringify(tabMaisonHote));

    }


    location.replace("submit-chambre.html");


}

//fonction pour ajouter une chambre
function SubmitChambre() {
    var maisonId = localStorage.getItem("finishMaisonID");
    var tabMaisonHote = JSON.parse(localStorage.getItem("MaisonHote") || "[]");

    var isvalid = false;
    var nbreRoom;
    for (let i = 0; i < tabMaisonHote.length; i++) {
        if (tabMaisonHote[i].id == maisonId) {
            if (tabMaisonHote[i].PropertyRooms >= 0) {

                nbreRoom = Number(tabMaisonHote[i].PropertyRooms);
                tabMaisonHote[i].PropertyRooms = Number(tabMaisonHote[i].PropertyRooms) - 1;
                isvalid = true;
            } else { isvalid = false }
        }
        break;
    }

    if (isvalid && nbreRoom > 0) {

        var tabChambre = JSON.parse(localStorage.getItem("Chambres") || "[]");
        var nomChambre = document.getElementById("nomChambre").value;
        var capChambre = document.getElementById("capChambre").value;
        var prixChambre = document.getElementById("prixChambre").value;
        var telChambre = document.getElementById("telChambre").value;
        var Chambre = {
            id: generateID(tabChambre),
            maisonId: maisonId,
            nomChambre: nomChambre,
            capChambre: capChambre,
            prixChambre: prixChambre,
            telChambre: telChambre,
            available: "true"
        }

        tabChambre.push(Chambre)
        localStorage.setItem("Chambres", JSON.stringify(tabChambre));
        location.reload();
        localStorage.setItem("MaisonHote", JSON.stringify(tabMaisonHote));
    }

    else {
        document.getElementById("save").innerHTML = "you have saved all the room";
        document.getElementById("save").style.color = "red";
        location.replace("user-properties.html");
    }

}
//fonction pour faire une reservation
function Reservations() {
    var id = localStorage.getItem("finishMaisonID");
    var tabChambre = JSON.parse(localStorage.getItem("Chambres") || "[]");
    var Id = localStorage.getItem("connectedUserID");
    var userTab = JSON.parse(localStorage.getItem("users") || "[]");
    var tabReservations = JSON.parse(localStorage.getItem("Reservations") || "[]");
    var emailUser = document.getElementById("emailUser").value;
    var Arrival = document.getElementById("arrival").value;
    var Departure = document.getElementById("departure").value;
    var Guest = document.getElementById("guest").value;
    var profilesUser ={};
    var profilChambre ={};
    var isreserve =false;
    for (let i = 0; i < userTab.length; i++) {
        if (userTab[i].id == Id) {
            profilesUser = userTab[i];
            break;
        }
    }
    if (profilesUser.email == emailUser) {
      
        for (let i = 0; i < tabChambre.length; i++) {
            if (tabChambre[i].maisonId == id &&tabChambre[i].capChambre>= Guest&&tabChambre[i].available=="true"){
                profilChambre=tabChambre[i];
                tabChambre[i].available="false";
                isreserve=true;
                break;
            }
           
        }
        localStorage.setItem("Chambres", JSON.stringify(tabChambre));

        if (isreserve) {

            var Reserve = {
                id: generateID(tabReservations),
                emailUser: emailUser,
                Arrival: Arrival,
                Departure: Departure,
                Guest: Guest,
                maisonid:id,
                chambreid:profilChambre.id,

            }
            tabReservations.push(Reserve);
            localStorage.setItem("Reservations", JSON.stringify(tabReservations));
            location.replace("index-5.html");
        }

    } else {
        document.getElementById("spanEmail").innerHTML = "email not valid or new account"
        document.getElementById("spanEmail").style.color = "red";
    }
}

// fonction qui affiche tous les utilisateurs 
function AdminUsers() {
    var userTab = getFromLS("users");
    var foundusers = [];
    content = ``;
    for (let i = 0; i < userTab.length; i++) {
        if (userTab[i].role == "client" || userTab[i].role == "owner") {
            foundusers.push(userTab[i]);

        }
    }
    for (let i = 0; i < foundusers.length; i++) {


        if (foundusers[i].role == "client") {
            content = content + `<tr>
                                    <td>
                                        <h5>${foundusers[i].id}</h5>
                                    </td>
                                    <td>
                                        <h5>${foundusers[i].lastName}</h5>
                                    </td>
                                    <td>
                                        <h5>${foundusers[i].email}</h5>
                                    </td>
                                    <td>
                                        <h5>${foundusers[i].tel}</h5>
                                    </td>
                                    <td>
                                        <h5>${foundusers[i].role}</h5>
                                    </td>
                                    <td>
                                        <h5>${foundusers[i].status}</h5>
                                    </td>
                                    <td>
                                        <h5>${foundusers[i].adress}</h5>
                                    </td>
                                 
                                    <td>
                                        <button class="btn-danger btn" onclick="deleteUser(${foundusers[i].id})">Delete</button>
                                    </td>
                                </tr>`

        } else if (foundusers[i].role == "owner") {
            if (foundusers[i].status == "not valid") {
                content = content + `<tr>
                                    <td>
                                        <h5>${foundusers[i].id}</h5>
                                    </td>
                                    <td>
                                        <h5>${foundusers[i].lastName}</h5>
                                    </td>
                                    <td>
                                        <h5>${foundusers[i].email}</h5>
                                    </td>
                                    <td>
                                        <h5>${foundusers[i].tel}</h5>
                                    </td>
                                    <td>
                                        <h5>${foundusers[i].role}</h5>
                                    </td>
                                    <td>
                                        <h5>${foundusers[i].status}</h5>
                                    </td>
                                    <td>
                                        <h5>${foundusers[i].adress}</h5>
                                    </td>
                                   
                                    <td>
                                        <button class="btn btn-danger" onclick="deleteUser(${foundusers[i].id})">Delete</button>
                                        <button class="btn btn-success" onclick="validOwner(${foundusers[i].id})">validate</button>
                                    </td>
                                </tr>`
            }
            else if (foundusers[i].status == "valid") {
                content = content + `<tr>
            <td>
                <h5>${foundusers[i].id}</h5>
            </td>
            <td>
                <h5>${foundusers[i].lastName}</h5>
            </td>
            <td>
                <h5>${foundusers[i].email}</h5>
            </td>
            <td>
                <h5>${foundusers[i].tel}</h5>
            </td>
            <td>
                <h5>${foundusers[i].role}</h5>
            </td>
            <td>
                <h5>${foundusers[i].status}</h5>
            </td>
            <td>
                <h5>${foundusers[i].adress}</h5>
            </td>
           
            <td>
                <button class="btn-danger btn" onclick="deleteUser(${foundusers[i].id})">Delete</button>
            
            </td>
            </tr>`
            }

        }
    }
    document.getElementById("userAdmin").innerHTML = content;

}
//fonction qui affiche tous les maisons de hotes
function AllMaisons() {
    var tabMaisonHote = JSON.parse(localStorage.getItem("MaisonHote") || "[]");
    var content = "";
    for (let i = 0; i < tabMaisonHote.length; i++) {
        content = content + `<tr>
        <td>
            <h5>${tabMaisonHote[i].id}</h5>
        </td>
        <td>
            <h5>${tabMaisonHote[i].PropertyName} </h5>
        </td>
        <td>
            <h5>${tabMaisonHote[i].PropertyPrice}</h5>
        </td>
        <td>
            <h5>${tabMaisonHote[i].PropertyTel}</h5>
        </td>
        <td>
            <h5>${tabMaisonHote[i].PropertyRooms}</h5>
        </td>
        <td>
            <h5>${tabMaisonHote[i].PropertyStatue}</h5>
        </td>
        <td>
            <h5>${tabMaisonHote[i].PropertyCountry}</h5>
        </td>
     
        <td>
            <button class="btn-danger btn" onclick="deleteMaison(${tabMaisonHote[i].id})">Delete</button>
        </td>
    </tr>`
    }
    document.getElementById("Maison").innerHTML = content;
}
// fonction qui affiche tous le properties
function AllProperties() {
    var tabMaisonHote = JSON.parse(localStorage.getItem("MaisonHote") || "[]");
    var content = "";
    for (let i = 0; i < tabMaisonHote.length; i++) {
        content = content + `<div class="box-two proerty-item">
                                        <div class="item-thumb">
                                            <a href="property.html" ><img src="assets/img/demo/property-3.jpg"></a>
                                        </div>

                                        <div class="item-entry overflow">
                                            <h5><a href=""> ${tabMaisonHote[i].PropertyName} </a></h5>
                                            <div class="dot-hr"></div>
                                            <span class="pull-left"><span> Area :</span> ${tabMaisonHote[i].PropertyM2}</span>
                                            <span class="proerty-price pull-right"><span>$</span> ${tabMaisonHote[i].PropertyPrice}</span>
                                            <p style="display: none;"> ${tabMaisonHote[i].PropertyDesc}</p>
                                            <div class="property-icon">
                                                <img src="assets/img/icon/bed.png"><span>${tabMaisonHote[i].PropertyBed}</span>|
                                                <img src="assets/img/icon/room.png"><span>${tabMaisonHote[i].PropertyRooms}</span>|
                                          
                                            </div>
                                        </div>


                                    </div>`
    }
    document.getElementById("properties").innerHTML = content;
}
// fonction qui affiche tous le chambres des maisons de hotes
function AllChambres() {
    var tabChambre = JSON.parse(localStorage.getItem("Chambres") || "[]");
    var content = "";
    for (let i = 0; i < tabChambre.length; i++) {
        content = content + `<tr>
        <td>
            <h5>${tabChambre[i].id}</h5>
        </td>
        <td>
            <h5>${tabChambre[i].nomChambre} </h5>
        </td>
        <td>
            <h5>${tabChambre[i].prixChambre}</h5>
        </td>
        <td>
            <h5>${tabChambre[i].telChambre}</h5>
        </td>
        <td>
            <h5>${tabChambre[i].capChambre}</h5>
        </td>
        <td>
            <h5>${tabChambre[i].available}</h5>
        </td>
        <td>
            <h5>${tabChambre[i].maisonId}</h5>
        </td>
     
        <td>
            <button class="btn-danger btn" onclick="deleteChambre(${tabChambre[i].id})">Delete</button>
        </td>
    </tr>`
    }
    document.getElementById("Chambre").innerHTML = content;
}
// fonction qui affiche tous les reservations
function AllReservations() {
    var tabReservations = JSON.parse(localStorage.getItem("Reservations") || "[]");
    var content = "";
    for (let i = 0; i < tabReservations.length; i++) {
        content = content + `<tr>
        <td>
            <h5>${tabReservations[i].id}</h5>
        </td>
        <td>
            <h5>${tabReservations[i].emailUser} </h5>
        </td>
        <td>
            <h5>${tabReservations[i].maisonid}</h5>
        </td>
        <td>
            <h5>${tabReservations[i].chambreid}</h5>
        </td>
        <td>
            <h5>${tabReservations[i].Arrival}</h5>
        </td>
        <td>
            <h5>${tabReservations[i].Departure}</h5>
        </td>
        <td>
            <h5>${tabReservations[i].Guest}</h5>
        </td>
     
        <td>
            <button class="btn-danger btn" onclick="deleteReservation(${tabReservations[i].id})">Delete</button>
        </td>
    </tr>`
    }
    document.getElementById("Reservation").innerHTML = content;
}
// fonction pour valider un owner par admin
function validOwner(idowner) {
    var usertab = getFromLS("users");
    for (let i = 0; i < usertab.length; i++) {
        if (usertab[i].id == idowner) {
            usertab[i].status = "valid";
            break;

        }

    }
    setTOLS("users", usertab);
    location.reload();
}
//fonction pour supprimer un user
function deleteUser(id) {
    var userTab = getFromLS("users");
    var pos;
    for (let i = 0; i < userTab.length; i++) {
        if (userTab[i].id == id) {
            pos = i;
            break;
        }

    }

    userTab.splice(pos, 1);
    setTOLS("users", userTab);
    location.reload();
}
//fonction pour supprimer un maison d'hote
function deleteMaison(id) {
    var tabMaisonHote = getFromLS("MaisonHote");
    var tabChambre = getFromLS("Chambres");
    var pos = searchPosbyIdandKey(id, "MaisonHote");
    for (let i = tabChambre.length - 1; i >= 0; i--) {
        if (tabChambre[i].maisonId == id) {
            tabChambre.splice(i, 1);
        }

    }
    setTOLS("Chambres", tabChambre);
    tabMaisonHote.splice(pos, 1);
    setTOLS("MaisonHote", tabMaisonHote);
    location.reload();
}
// fonction pour supprimer une chambre
function deleteChambre(id) {
    var tabChambre = getFromLS("Chambres");
    var pos;
    for (let i = 0; i < tabChambre.length; i++) {
        if (tabChambre[i].id == id) {
            pos = i;
            break;
        }

    }

    tabChambre.splice(pos, 1);
    setTOLS("Chambres", tabChambre);
    location.reload();
}
// fonction pour supprimer une reservation
function deleteReservation(id) {
    var tabReservations = getFromLS("Reservations");
    var pos;
    for (let i = 0; i < tabReservations.length; i++) {
        if (tabReservations[i].id == id) {
            pos = i;
            break;
        }

    }

    tabReservations.splice(pos, 1);
    setTOLS("Reservations", tabReservations);
    location.reload();
}
// fonction qui mise a jour user profil
function UpdateUser(id) {
    //recup de donnee
    var newFirstname = getValue("newfirstname");
    var newLastname = getValue("newlastname");
    var newEmail = getValue("newemail");
    var newPhone = getValue("newphone");
    var newAdress = getValue("newadress");
    var newPassword = getValue("newpassword");
    var userTab = getFromLS("users");
    //chercher le prd selectioner et remplacer le valeur
    for (let i = 0; i < userTab.length; i++) {
        if (userTab[i].id == id) {
            userTab[i].firstName = newFirstname;
            userTab[i].lastName = newLastname;
            userTab[i].email = newEmail;
            userTab[i].tel = newPhone;
            userTab[i].adress = newAdress;
            userTab[i].password = newPassword;
            break;
        }
    }
    //enregistre dans ls
    setTOLS("users", userTab);
    location.reload();
}
// fonction qui recherche un maison d'hote selon nom ou city
function searchPropertie() {
    var tabMaisonHote = JSON.parse(localStorage.getItem("MaisonHote") || "[]");
    var propertyName = document.getElementById("propertieName").value;
    var propertyCity = document.getElementById("lunchBegins").value;
    var foundProperties = {};
    var content = "";
    if (propertyName != "" && propertyCity != "") {
        for (let i = 0; i < tabMaisonHote.length; i++) {
            if (tabMaisonHote[i].PropertyName == propertyName && tabMaisonHote[i].PropertyCity == propertyCity) {
                foundProperties = tabMaisonHote[i];
                content = content + `<div class="box-two proerty-item">
                                            <div class="item-thumb">
                                                <a href="property.html" ><img src="assets/img/demo/property-3.jpg"></a>
                                            </div>
    
                                            <div class="item-entry overflow">
                                                <h5><a href=""> ${foundProperties.PropertyName} </a></h5>
                                                <div class="dot-hr"></div>
                                                <span class="pull-left"><b> Area :</b>${foundProperties.PropertyM2}</span>
                                                <span class="proerty-price pull-right"><span>$</span> ${foundProperties.PropertyPrice}</span>
                                                <p style="display: none;">Suspendisse ultricies Suspendisse ultricies Nulla quis dapibus nisl. Suspendisse ultricies commodo arcu nec pretium ...</p>
                                                <div class="property-icon">
                                                    <img src="assets/img/icon/bed.png"><span>${foundProperties.PropertyBed}</span>|
                                                    <img src="assets/img/icon/room.png"><span>${foundProperties.PropertyRooms}</span>|
                                              
                                                </div>
                                            </div>
    
    
                                        </div>`


            }
        }
        document.getElementById("propertiesSearch").innerHTML = content;


    } else {
        for (let i = 0; i < tabMaisonHote.length; i++) {
            content = content + `<div class="box-two proerty-item">
                                            <div class="item-thumb">
                                                <a href="property.html" ><img src="assets/img/demo/property-3.jpg"></a>
                                            </div>
    
                                            <div class="item-entry overflow">
                                                <h5><a href=""> ${tabMaisonHote[i].PropertyName} </a></h5>
                                                <div class="dot-hr"></div>
                                                <span class="pull-left"><b> Area :</b>${tabMaisonHote[i].PropertyM2}</span>
                                                <span class="proerty-price pull-right"><span>$</span> ${tabMaisonHote[i].PropertyPrice}</span>
                                                <p style="display: none;"> ${tabMaisonHote[i].PropertyDesc}</p>
                                                <div class="property-icon">
                                                    <img src="assets/img/icon/bed.png"><span>${tabMaisonHote[i].PropertyBed}</span>|
                                                    <img src="assets/img/icon/room.png"><span>${tabMaisonHote[i].PropertyRooms}</span>|
                                              
                                                </div>
                                            </div>
    
    
                                        </div>`
        }
        document.getElementById("propertiesSearch").innerHTML = content;


    }


}

// fonction pour modifier une maison d'hote par owner dans ls
function propertyEdit(id) {
    //recuperation la valeurs de l'input entrer par utilisateur
    var newpropertyName = getValue("newpropertyName");
    var newpropertyPrice = getValue("newpropertyPrice");
    var newpropertyTel = getValue("newpropertyTel");
    var newpropertyDescription = getValue("newpropertyDes");
    var newpropertyCountry = getValue("newpropertyCoun");
    var newpropertyCity = getValue("newpropertyCit");
    var newpropertyStatue = getValue("newpropertySta");
    var newpropertyRooms = getValue("newpropertyRoom");
    var newpropertyBed = getValue("newpropertyBed");
    var newpropertyM2 = getValue("newpropertyM2");
    var tabMaisonHote = getFromLS("MaisonHote");
    for (let i = 0; i < tabMaisonHote.length; i++) {
        if (tabMaisonHote[i].id == id) {
            tabMaisonHote[i].PropertyName = newpropertyName;
            tabMaisonHote[i].PropertyPrice = newpropertyPrice;
            tabMaisonHote[i].PropertyTel = newpropertyTel;
            tabMaisonHote[i].PropertyDesc = newpropertyDescription;
            tabMaisonHote[i].PropertyCountry = newpropertyCountry;
            tabMaisonHote[i].PropertyCity = newpropertyCity;
            tabMaisonHote[i].PropertyStatue = newpropertyStatue;
            tabMaisonHote[i].PropertyRooms = newpropertyRooms;
            tabMaisonHote[i].PropertyBed = newpropertyBed;
            tabMaisonHote[i].PropertyM2 = newpropertyM2;
            break;

        }

    }
    setTOLS("MaisonHote", tabMaisonHote);
    location.reload();
}
// fonction pour affiche le properties de owner connecter
function ownerProperty() {
    var tabMaisonHote = JSON.parse(localStorage.getItem("MaisonHote") || "[]");
    var Id = localStorage.getItem("connectedUserID");
    var content = "";
    for (let i = 0; i < tabMaisonHote.length; i++) {
        if (tabMaisonHote[i].OwnerID == Id) {
            content = content + `<div id="list-type" class="proerty-th-list">
                                <div class="col-md-4 p0">
                                    <div class="box-two proerty-item">
                                        <div class="item-thumb">
                                            <a href="property.html" ><img src="assets/img/demo/property-3.jpg"></a>
                                        </div>
                                        <div class="item-entry overflow">
                                            <h5><a href=""> ${tabMaisonHote[i].PropertyName} </a></h5>
                                            <div class="dot-hr"></div>
                                            <span class="pull-left"><b> Area :</b> ${tabMaisonHote[i].PropertyM2}m2 </span>
                                            <span class="proerty-price pull-right"> $ ${tabMaisonHote[i].PropertyPrice}</span>
                                            <p style="display: none;">${tabMaisonHote[i].PropertyDesc} </p>
                                            <div class="property-icon">
                                                <img src="assets/img/icon/bed.png">${tabMaisonHote[i].PropertyBed}
                                                <img src="assets/img/icon/room.png">${tabMaisonHote[i].PropertyRooms}
                                                <div class="dealer-action pull-right">                                        
                                                    <a href="edit-property.html" class="button" >Edit </a> 
                                                    <a href="property.html" class="button">View</a>
                                                    <a href="submit-chambre.html" class="button">submit Room</a>
                                                    <button class="button delete_user_car" onclick="deleteMaison(${tabMaisonHote[i].id})" style="font-size: larger; color: black;">Delete</button>
                                                </div>
                                                 
                                            </div>

                                                  
                                        </div>
                                    </div>
                                </div>                                                                                     
                            </div>`
        }

    }

    document.getElementById("ownerPoperty").innerHTML = content;
}
// fonction qui modifier le property de owner connecter
function ownerpropertyEdit() {
    var tabMaisonHote = JSON.parse(localStorage.getItem("MaisonHote") || "[]");
    var Id = localStorage.getItem("connectedUserID");
    var maisonId = localStorage.getItem("finishMaisonID");
    var content = "";
    for (let i = 0; i < tabMaisonHote.length; i++) {
        if (tabMaisonHote[i].OwnerID == Id && tabMaisonHote[i].id == maisonId) {
            content = content + `  <div class="container">
                <div class="clearfix" > 
                    <div class="wizard-container"> 

                        <div class="wizard-card ct-wizard-orange" id="wizardProperty">
                            <form action="" method="">                        
                                <div class="wizard-header">
                                    <h3>
                                        <b>Submit</b> YOUR PROPERTY <br>
                                        <small>Lorem ipsum dolor sit amet, consectetur adipisicing.</small>
                                    </h3>
                                </div>

                                <ul>
                                    <li><a href="#step1" data-toggle="tab">Step 1 </a></li>
                                    <li><a href="#step2" data-toggle="tab">Step 2 </a></li>
                                    <li><a href="#step3" data-toggle="tab">Step 3 </a></li>
                                    <li><a href="#step4" data-toggle="tab">Edite </a></li>
                                </ul>

                                <div class="tab-content">

                                    <div class="tab-pane" id="step1">
                                        <div class="row p-b-15  ">
                                            <h4 class="info-text"> Let's start with the basic information (with validation)</h4>
                                            <div class="col-sm-4 col-sm-offset-1">
                                                <div class="picture-container">
                                                    <div class="picture">
                                                        <img src="assets/img/default-property.jpg" class="picture-src" id="wizardPicturePreview" title=""/>
                                                        <input type="file" id="wizard-picture">
                                                    </div> 
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label>Property name <small>(required)</small></label>
                                                    <input name="propertyname" type="text" class="form-control" id="newpropertyName">
                                                    <span id="propertynaError"></span>
                                                </div>

                                                <div class="form-group">
                                                    <label>Property price <small>(price guests pay per night)</small></label>
                                                    <input name="propertyprice" type="text" class="form-control" id="newpropertyPrice">
                                                    <span id="propertyprError"></span>
                                                </div> 
                                                <div class="form-group">
                                                    <label>Telephone <small>(empty if you wanna use default phone number)</small></label>
                                                    <input name="phone" type="text" class="form-control" id="newpropertyTel">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!--  End step 1 -->

                                    <div class="tab-pane" id="step2">
                                        <h4 class="info-text"> How much your Property is Beautiful ? </h4>
                                        <div class="row">
                                            <div class="col-sm-12"> 
                                                <div class="col-sm-12"> 
                                                    <div class="form-group">
                                                        <label>Property Description :</label>
                                                        <textarea name="discrition" class="form-control" id="newpropertyDes" ></textarea>
                                                        <span id="DescriptonError"></span>
                                                    </div> 
                                                </div> 
                                            </div>

                                            <div class="col-sm-12">
                                                <div class="col-sm-4">
                                                    <div class="form-group">
                                                        <label>Property Country :</label>
                                                        <select id="newpropertyCoun" class="selectpicker" data-live-search="true" data-live-search-style="begins" title="Select your city">
                                                            <option>Tunisia</option>
                                                            <option>Paris</option>
                                                            <option>Casablanca</option>
                                                            <option>Tokyo</option>
                                                            <option>Marraekch</option>
                                                            <option>kyoto , shibua</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-sm-4">
                                                    <div class="form-group">
                                                        <label>Property City :</label>
                                                        <select id="newpropertyCit" class="selectpicker" data-live-search="true" data-live-search-style="begins" title="Select your city">
                                                            <option>Tunisia</option>
                                                            <option>Paris</option>
                                                            <option>Casablanca</option>
                                                            <option>Tokyo</option>
                                                            <option>Marraekch</option>
                                                            <option>kyoto , shibua</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-sm-4">
                                                    <div class="form-group">
                                                        <label>Property Statue  :</label>
                                                        <select id="newpropertySta" class="selectpicker show-tick form-control">
                                                            <option> -Status- </option>
                                                            <option>Available</option>
                                                            <option>Not Available </option>
                                                             

                                                        </select>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            <div class="col-sm-12 padding-top-15">                                                   
                                                <div class="col-sm-4">
                                                    <div class="form-group">
                                                        <label for="property-geo" >  Rooms: </label>
                                                        <input type="number" id="newpropertyRoom" name="tentacles" min="1" max="5" />
                                                    </div>
                                                </div>
                                                <div class="col-sm-4">
                                                    <div class="form-group">
                                                        <label for="property-geo"> Bed:</label>
                                                        <input type="number" id="newpropertyBed" name="tentacles" min="1" max="15" />
                                                    </div>
                                                </div>
                                                <div class="col-sm-4">

                                                    <div class="form-group">
                                                        <label for="property-geo"> Property(m2):</label>
                                                        <input type="number" id="newpropertyM2" name="tentacles" min="200" max="1000" />
                                                    </div>
                                                </div>   
                                            </div>
                                            <div class="col-sm-12 padding-top-15">
                                                <div class="col-sm-3">
                                                    <div class="form-group">
                                                        <div class="checkbox">
                                                            <label>
                                                                <input type="checkbox"> Air conditioning
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div> 
                                                <div class="col-sm-3">
                                                    <div class="form-group">
                                                        <div class="checkbox">
                                                            <label>
                                                                <input type="checkbox"> Heating
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>                                                 
                                                <div class="col-sm-3">
                                                    <div class="form-group">
                                                        <div class="checkbox">
                                                            <label>
                                                                <input type="checkbox"> Free WiFi
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>                                                 
                                                <div class="col-sm-3">
                                                    <div class="form-group">
                                                        <div class="checkbox">
                                                            <label>
                                                                <input type="checkbox"> Kitchen 
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div> 
                                            </div> 
                                            <div class="col-sm-12 padding-bottom-15">
                                                <div class="col-sm-3">
                                                    <div class="form-group">
                                                        <div class="checkbox">
                                                            <label>
                                                                <input type="checkbox"> Washing machine
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-sm-3">
                                                    <div class="form-group">
                                                        <div class="checkbox">
                                                            <label>
                                                                <input type="checkbox"> Swimming pool
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-sm-3">
                                                    <div class="form-group">
                                                        <div class="checkbox">
                                                            <label>
                                                                <input type="checkbox"> Flat-screen TV
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-sm-3">
                                                    <div class="form-group">
                                                        <div class="checkbox">
                                                            <label>
                                                                <input type="checkbox"> Garden view

                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <br>
                                        </div>
                                    </div>
                                    <!-- End step 2 -->

                                    <div class="tab-pane" id="step3">                                        
                                        <h4 class="info-text">Give us somme images and videos ? </h4>
                                        <div class="row">  
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label for="property-images">Chose Images :</label>
                                                    <input class="form-control" type="file" id="property-images">
                                                    <p class="help-block">Select multipel images for your property .</p>
                                                </div>
                                            </div>
                                            <div class="col-sm-6"> 
                                                <div class="form-group">
                                                    <label for="property-video">Property video :</label>
                                                    <input class="form-control" value="" placeholder="http://www.youtube.com, http://vimeo.com" name="property_video" type="text">
                                                </div> 

                                                <div class="form-group">
                                                    <input class="form-control" value="" placeholder="http://www.youtube.com, http://vimeo.com" name="property_video" type="text">
                                                </div>

                                                <div class="form-group">
                                                    <input class="form-control" value="" placeholder="http://www.youtube.com, http://vimeo.com" name="property_video" type="text">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!--  End step 3 -->


                                    <div class="tab-pane" id="step4">                                        
                                        <h4 class="info-text"> Finished and submit </h4>
                                        <div class="row">  
                                            <div class="col-sm-12">
                                                <div class="">
                                                    <p>
                                                        <label><strong>Terms and Conditions</strong></label>
                                                        By accessing or using  GARO ESTATE services, such as 
                                                        posting your property advertisement with your personal 
                                                        information on our website you agree to the
                                                        collection, use and disclosure of your personal information 
                                                        in the legal proper manner
                                                    </p>

                                                    <div class="checkbox">
                                                        <label>
                                                            <input type="checkbox" /> <strong>Accept termes and conditions.</strong>
                                                        </label>
                                                    </div> 

                                                </div> 
                                            </div>
                                        </div>
                                    </div>
                                    <!--  End step 4 -->

                                </div>

                                <div class="wizard-footer">
                                    <div class="pull-right">
                                        <input type='button' class='btn btn-next btn-primary' name='next' value='Next' />
                                        <input type='button' class='btn btn-finish btn-primary ' name='finish' value='EDIT' onclick="propertyEdit(${tabMaisonHote[i].id})" />
                                    </div>

                                    <div class="pull-left">
                                        <input type='button' class='btn btn-previous btn-default' name='previous' value='Previous' />
                                    </div>
                                    <div class="clearfix"></div>                                            
                                </div>	
                            </form>
                        </div>
                        <!-- End submit form -->
                    </div> 
                </div>
            </div>`
            break
        }
    }
    document.getElementById("ownerPopertyEdit").innerHTML = content;
    location.replace("user-properties.html");
}
// fonction enregistrer image dans ls
function image() {
    var Image = document.getElementById("wizardPicturePreview").value;
    var tabImage = JSON.parse(localStorage.getItem("MaisonImage") || "[]");
    var imageMaison = localStorage.getItem("finishMaisonID")
    var propertyImage = getBase64Image(Image);
    var image = {
        id: generateID(tabImage),
        PropertyImage: propertyImage,
        imageMaison: imageMaison

    }
    tabImage.push(image);
    setTOLS("MaisonImage", tabImage);

}

// fonction qui convertit l'image en chaîne Base64 :
function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}
// **********fnc des optimisations
// fnc qui recherche une position selon un id et un key
function searchPosbyIdandKey(id, key) {
    var T = getFromLS(key);
    var pos;
    for (let i = 0; i < T.length; i++) {
        if (T[i].id == id) {
            pos = i;
            break;
        }

    }
    return (pos);
}
// fnc chercher un objet par son id et cle
function afficheObjetID(ID, key) {
    tab = JSON.parse(localStorage.getItem(key) || "[]");
    foundobj = {};
    for (let i = 0; i < tab.length; i++) {
        if (tab[i].id == ID) {
            foundobj = tab[i];
            break;
        }

    }
    return (foundobj);
}
// recupere le donné de input
function getValue(id) {
    return document.getElementById(id).value;
}
//save to ls
function setTOLS(objet, tabobjet) {
    return (localStorage.setItem(objet, JSON.stringify(tabobjet)));
}
// recuperer de ls
function getFromLS(key) {
    return (JSON.parse(localStorage.getItem(key) || "[]"));
}
// fnc retourne le max de 2 nbre
function checkNumber(n1, n2) {
    return (Number(n1) > n2);
}
//comparer une chaine par rapport un nbre
function checkLenght(ch, nb) {
    return (ch.length >= nb);

}
//verifier l'egalite de 2 chaine
function confirmedch(ch1, ch2) {
    return (ch1 == ch2);
}
//verfier la languer d'une chaine par rapport un nbre
function confirmedTel(ch, nb) {
    return (ch.length == nb);
}
//fonction pour generer auto de id(chercher id max et ajout 1)
function generateID(T) {
    var max;
    if (T.length == 0) {
        max = 0;
    }
    else {
        max = T[0].id;
        for (let i = 1; i < T.length; i++) {
            if (T[i].id > max) {
                max = T[i].id;
            }

        }
    }
    return (max + 1);
}
// fnc affiche contenu  dans page html selon cas
function controleSaisie(cas, id, content) {

    if (cas == false) {
        document.getElementById(id).innerHTML = content;
        document.getElementById(id).style.color = "red";
    }
    else {
        document.getElementById(id).innerHTML = "";
    }

}

