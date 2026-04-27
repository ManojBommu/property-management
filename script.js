const API = "http://localhost:5000";

function show(id){
    document.querySelectorAll(".section").forEach(s=>s.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

async function addProperty(){
    const user = JSON.parse(localStorage.getItem("user"));

    if(!user){
        alert("Login first");
        return;
    }

    const data = {
        title: document.getElementById("title").value,
        rent: document.getElementById("rent").value,
        image: document.getElementById("image").value,
        amenities: document.getElementById("amenities").value,
        available: true,
        ownerEmail: user.email
    };

    console.log("Sending:", data);

    try {
        const res = await fetch(API + "/api/property/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await res.json();
        console.log("Response:", result);

        alert("Property Added ✅");

        loadProperties();

    } catch (err) {
        console.error(err);
        alert("Error adding property");
    }
}

async function loadProperties(){
    try {
        const res = await fetch(API + "/api/property/all");
        const data = await res.json();

        let html = "";

        data.forEach(p=>{
            html += `
            <div class="property">
                <img src="${p.image}" width="100%">
                <h3>${p.title}</h3>
                <p>₹${p.rent}</p>
                <p>${p.amenities}</p>
            </div>`;
        });

        document.getElementById("list").innerHTML = html;

    } catch(err){
        console.log(err);
    }
}

async function sendComplaint(){
    const user = JSON.parse(localStorage.getItem("user"));

    if(!user){
        alert("Login first");
        return;
    }

    const data = {
        userEmail: user.email,
        propertyId: document.getElementById("pid").value,
        message: document.getElementById("msg").value
    };

    console.log("Complaint Sending:", data);

    try {
        const res = await fetch(API + "/api/complaint/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await res.json();
        console.log(result);

        alert("Complaint Sent ✅");

    } catch(err){
        console.log(err);
        alert("Error sending complaint");
    }
}

loadProperties();