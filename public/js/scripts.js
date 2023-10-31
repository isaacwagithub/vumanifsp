var services,myOutput;
var vso = [
    {
        id: "funeral",
        HTMLContent: ""+"<br/>"+""+"<div class='row'>"+""+"<li>"+""+"<h5 style='font-weight:bold;font-size:150%;'>"+"Family Funeral Cover"+"</h5>"+""+"<p>"+"Our Family Funeral Cover is more than just financial protection, it's a gesture of love and care for your family's future. With our comprehensive plans, you ensure that your loved ones receive the support they need during challenging times. Secure their peace of mind, so they can focus on honoring your memory."+"</p>"+""+"<p>"+""+"<span>"+""+"</span>"+"Family funeral cover from R100 per month"+"</p>"+""+"<p>"+""+"<span>"+""+"</span>"+"Cover anyone from the age of 0 - 100 years"+"</p>"+""+"<p>"+""+"<span>"+""+"</span>"+"No health check required"+"</p>"+""+"<br/>"+""+"<h4>"+"Benefits"+"</h4>"+""+"<p>"+""+"<span>"+""+"</span>"+"Groceries"+"</p>"+""+"<p>"+""+"<span>"+""+"</span>"+"Tombstone"+"</p>"+""+"</li>"+""+"<br/>"+""
    },
    {
        id: "brokery",
        HTMLContents: ""+"<br/>"+""+"<li>"+""+"<h5 style='font-weight:bold;font-size:150%;'>"+"Broker Service"+"</h5>"+"At Vumani, we take immense pride in our Broker Services, serving as the vital bridge between product suppliers and our valued clients."+"<p>"+"Our expert brokers bring a wealth of experience and industry knowledge, ensuring seamless transactions and successful collaborations. With an unwavering commitment to transparency and integrity, we negotiate on your behalf to secure the best deals. Whether you're a supplier seeking wider market reach or a client in search of the perfect solution, our Broker Services are your trusted path to excellence."+"</p>"+"Our Broker Services are driven by the belief that every business deserves a dedicated advocate. We understand the complexities of today's markets and the importance of strong partnerships. With a diverse network of suppliers and a deep understanding of client needs, we're here to streamline the process, making it simpler, more cost-effective, and less time-consuming for everyone involved. When you choose [Your Company Name] for Broker Services, you're choosing a dedicated team committed to your success, forging connections that stand the test of time."+"</li>"+"",
        HTMLContent: ""+"<br/>"+
        "<li>"+
        "<h5 style='font-weight:bold;font-size:150%;'>"+"Broker Service"+"</h5>"+
        "<p>"+"Our Broker Service stands as your trusted link to seamless and efficient transactions. With expert brokers dedicated to transparency and integrity, we negotiate on your behalf to secure the best deals. Choose our Broker Service for a pathway to success in the complex marketplace."+"</p>"+
        "<p>"+""+"<span>"+""+"</span>"+"Our trusted brokers facilitate seamless transactions"+"</p>"+
        "<p>"+""+"<span>"+""+"</span>"+"Dedicated to transparency and integrity"+"</p>"+
        "<br/>"+
        "<h4>"+"Why Choose Us"+"</h4>"+
        "<p>"+""+"<span>"+""+"</span>"+"Unparalleled Market Knowledge"+"</p>"+
        "<p>"+""+"<span>"+""+"</span>"+"Strong Industry Connections"+"</p>"+
        "</li>"+""
    },
    {
        id: "lifeCover",
        HTMLContents: ""+"<br/>"+""+"<li>"+""+"<h5 style='font-weight:bold;font-size:150%;'>"+"Life Cover Service"+"</h5>"+""+"<p>"+"This section is still under construction"+"</p>"+""+"</li>"+"",
        HTMLContent: ""+"<br/>"+
        "<li>"+
        "<h5 style='font-weight:bold;font-size:150%;'>"+"Life Cover Service"+"</h5>"+
        "<p>"+"Our Life Cover Service is your gateway to securing your family's financial future. Offering tailored coverage plans from as low as R100 per month, we provide peace of mind and financial security for your loved ones. Choose us to safeguard your legacy and ensure your family's well-being, no matter what life may bring."+"</p>"+
        "<p>"+""+"<span>"+""+"</span>"+"Coverage tailored to your needs"+"</p>"+
        "<p>"+""+"<span>"+""+"</span>"+"From as low as R100 per month"+"</p>"+
        "<br/>"+
        "<h4>"+"Benefits"+"</h4>"+
        "<p>"+""+"<span>"+""+"</span>"+"Education"+"</p>"+
        "<p>"+""+"<span>"+""+"</span>"+"Debt Relief"+"</p>"+
        "</li>"
        +"<br/>"+""
    },
    {
        id: "career",
        HTMLContents: ""+"<br/>"+""+"<li>"+""+"<h5 style='font-weight:bold;font-size:150%;'>"+"Career Service"+"</h5>"+""+"<p>"+"This section is still under construction"+"</p>"+""+"</li>"+"",
        HTMLContent: ""+"<br/>"+
        "<li>"+
        "<h5 style='font-weight:bold;font-size:150%;'>"+"Career Service"+"</h5>"+
        "<p>"+"Our Career Service is your key to unlocking your full potential and achieving your career aspirations. With expert guidance, dedicated advisors, and customized solutions, we're here to support your unique journey. Choose us to navigate the path to success in your career, backed by our proven track record and commitment to your professional growth."+"</p>"+
        "<p>"+""+"<span>"+""+"</span>"+"Expert advice and career development support"+"</p>"+
        "<p>"+""+"<span>"+""+"</span>"+"Customized solutions to fit your unique journey"+"</p>"+
        "<br/>"+
        "<h4>"+"Why Choose Us"+"</h4>"+
        "<p>"+""+"<span>"+""+"</span>"+"Proven Track Record of Success"+"</p>"+
        "<p>"+""+"<span>"+""+"</span>"+"Dedicated Career Advisors"+"</p>"+
        "</li>"+""
    }
];
function changeService(id){

    services = document.getElementsByClassName("service");    
    myOutput = document.getElementById("ulOffers");
   
    for(var i = 0; i <= services.length-1; i++){
        
        if(services[i].attributes[1].value == id){
            //Adding the tab_actrive class to the clicked nav link
            services[i].classList.add("tab_active");
            //clearing the output to display new content
            myOutput.innerHTML = "";
            //Appending data associated with the clicked nav link
            myOutput.innerHTML = vso[i].HTMLContent;
            // if(vso[i].id == "funeral"){
            //     myOutput.innerHTML = vso[i].HTMLContent;
            // }else{
            //     myOutput.innerHTML = vso[i].HTMLContents;
            // }
            
        }else{
            services[i].classList.remove("tab_active");
        }
    }
}
