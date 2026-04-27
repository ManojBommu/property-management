let properties=[];
let payments=[];
let complaints=[];

/* SECTION SWITCH */
function showSection(id){
    document.querySelectorAll(".section").forEach(s=>s.style.display="none");
    document.getElementById(id).style.display="block";
}

/* ADD PROPERTY */
function addProperty(){

    const p={
        id:Date.now(),
        title:title.value,
        rent:rent.value,
        image:image.value,
        amenities:amenities.value,
        available:true,
        nearby:{
            police:police.value,
            hospital:hospital.value,
            canteen:canteen.value,
            food:food.value
        }
    };

    properties.push(p);
    loadProperties();
}

/* LOAD */
function loadProperties(){

    let html="";

    properties.forEach(p=>{
        html+=`
        <div class="property">

            <img src="${p.image || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800'}">

            <div class="property-content">

                <h3>${p.title}</h3>
                <p>₹${p.rent}</p>

                <div class="status ${p.available?'available':'not'}">
                    ${p.available?'Available':'Not Available'}
                </div>

                <div class="nearby">
                    🚓 ${p.nearby.police}<br>
                    🏥 ${p.nearby.hospital}<br>
                    🍽 ${p.nearby.canteen}<br>
                    🍛 ${p.nearby.food}
                </div>

                <div class="actions">
                    <button class="toggle" onclick="toggleStatus(${p.id})">Toggle</button>
                    <button class="delete" onclick="deleteProperty(${p.id})">Delete</button>
                </div>

            </div>
        </div>
        `;
    });

    list.innerHTML=html;
}

/* DELETE */
function deleteProperty(id){
    properties=properties.filter(p=>p.id!==id);
    loadProperties();
}

/* TOGGLE */
function toggleStatus(id){
    const p=properties.find(x=>x.id===id);
    p.available=!p.available;
    loadProperties();
}

/* PAYMENT */
function addPayment(){
    payments.push({
        pid:payPid.value,
        amount:amount.value
    });

    paymentList.innerHTML+=`
    <div>Property ${payPid.value} - ₹${amount.value}</div>
    `;
}

/* COMPLAINT */
function addComplaint(){
    complaints.push({
        pid:cPid.value,
        msg:cMsg.value
    });

    complaintList.innerHTML+=`
    <div>${cPid.value}: ${cMsg.value}</div>
    `;
}