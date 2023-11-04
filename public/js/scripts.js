var services,myOutput;
var vso = [
    {
        id: "funeral",
        HTMLContent: ""+"<br/>"+
        "<div class='row'>"+
        "<li>"+
        "<h5 style='font-weight:bold;font-size:150%;'>"+"Family Funeral Cover"+"</h5>"+
        "<p>"+"Family Funeral Cover is more than just financial protection, it's a gesture of love and care for your family's future. With our comprehensive plans, you ensure that your loved ones receive the support they need during challenging times. Secure their peace of mind, so they can focus on honoring your memory."+"</p>"+
        "<p>"+""+"<span>"+""+"</span>"+"Family funeral cover from R100 per month"+"</p>"+
        "<p>"+""+"<span>"+""+"</span>"+"Cover anyone from the age of 0 - 100 years"+"</p>"+
        "<p>"+""+"<span>"+""+"</span>"+"No health check required"+"</p>"+
        "<br/>"+
        "<h4>"+"Benefits"+"</h4>"+
        "<p>"+""+"<span>"+""+"</span>"+"Groceries"+"</p>"+
        "<p>"+""+"<span>"+""+"</span>"+"Unveiling Ceremony."+"</p>"+
        "<p>"+""+"<span>"+""+"</span>"+"Cash back."+"</p>"+
        "<br/>"+
        "<h4>"+"Providing Peace of Mind: Our Family Funeral Cover Service"+"</h4>"+
        "<p>"+"We understand the importance of providing peace of mind during difficult times. Our Family Funeral Cover Service is a dedicated solution to help you and your loved ones navigate the financial aspects of a funeral with ease. We take pride in offering compassionate support and practical solutions to ease the burden during times of grief. With our service, you can ensure that your family is protected and financially prepared for those inevitable moments in life. Choose Vumani for reliable funeral cover and experience the comfort of knowing you've taken care of the ones you cherish most during their time of need."+"</p>"+
        "</li>"+
        "</div>"+
        "<br/>"
    },
    {
        id: "brokery",
        HTMLContents: ""+"<br/>"+""+"<li>"+""+"<h5 style='font-weight:bold;font-size:150%;'>"+"Broker Service"+"</h5>"+"At Vumani, we take immense pride in our Broker Services, serving as the vital bridge between product suppliers and our valued clients."+"<p>"+"Our expert brokers bring a wealth of experience and industry knowledge, ensuring seamless transactions and successful collaborations. With an unwavering commitment to transparency and integrity, we negotiate on your behalf to secure the best deals. Whether you're a supplier seeking wider market reach or a client in search of the perfect solution, our Broker Services are your trusted path to excellence."+"</p>"+"Our Broker Services are driven by the belief that every business deserves a dedicated advocate. We understand the complexities of today's markets and the importance of strong partnerships. With a diverse network of suppliers and a deep understanding of client needs, we're here to streamline the process, making it simpler, more cost-effective, and less time-consuming for everyone involved. When you choose Vumani for Broker Services, you're choosing a dedicated team committed to your success, forging connections that stand the test of time."+"</li>"+"",
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
        "<br/>"+
        "<h4>"+"Unlocking Success: Our Dedicated Broker Service"+"</h4>"+
        "<p>"+"We pride ourselves on being your dedicated link to a seamless and efficient marketplace experience. Our Broker Service is your gateway to trust, transparency, and expert negotiation. Our team of professionals is committed to securing the best deals on your behalf. Choose our Broker Service for a clear path to success in the complex marketplace. We are here to help you navigate the intricacies of the financial world, and our unparalleled market knowledge and strong industry connections ensure that you're always one step ahead. Partner with Vumani for unparalleled expertise and a brighter financial future"+"</p>"+
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
        "<br/>"+
        "<h4>"+"Protecting What Matters Most: Our Life Cover Service"+"</h4>"+
        "<p>"+"At Vumani, we understand the value of safeguarding your loved ones and their future. Our Life Cover Service is designed to provide you with peace of mind, knowing that your family's financial well-being is secure. With our comprehensive life cover plans, you can be confident that your loved ones will have the support they need during challenging times. Choose Vumani for a pathway to ensure their peace of mind and a brighter future. Our commitment to protecting what matters most and our dedication to providing financial security set us apart. Partner with us for a secure and worry-free tomorrow."+"</p>"+
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
        "<p>"+"At Vumani, we are dedicated to helping you realize your full career potential. Our Career Service is the gateway to unlocking your professional aspirations. With our team of expert advisors and tailored solutions, we are here to guide you on your unique journey towards success. We take pride in our proven track record of helping individuals reach their career goals and our commitment to your professional growth. Choose Vumani for expert advice, career development support, and customized solutions that are designed to fit your unique path. We're your partners in achieving your dreams and ensuring a brighter professional future."+"</p>"+
        "<p>"+""+"<span>"+""+"</span>"+"Proven Track Record of Success"+"</p>"+
        "<p>"+""+"<span>"+""+"</span>"+"Dedicated Career Advisors"+"</p>"+
        "<p>"+""+"</p>"+
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
