$(document).ready(function(){
    var partnersToAnimate = [
        "Collaborate with us to reach new heights of success.",
        "Your journey to success begins with a partnership built on trust.",
        "Experience the power of synergy as we work together for your success.",
        "We value our partnership and are committed to your satisfaction.",
        "Embark on a journey of growth with a partner dedicated to your success.",
        "Together, we can overcome challenges and achieve remarkable results.",
        "Our commitment is to be more than a partner; we aim to be your ally in success.",
        "Open the door to endless possibilities with a partnership based on trust and integrity.",
        "Join hands with us for a partnership that goes beyond expectations.",
        "We're here to support you every step of the way in our collaborative journey.",
        "Trust us to be the reliable partner you need for all your endeavors.",
        "Your success story is waiting to be written, and we're here to help you pen it.",
        "Build a future of success with a partner who understands and values your goals.",
        "Partner with us for a journey marked by excellence and shared achievements.",
        "Your aspirations and our commitment - the perfect blend for a successful partnership.",
        "Unlock the full potential of collaboration as we join forces for your success."
    ];
    

    var introToAnimate = [
        "Discover a partnership committed to your financial success.",
        "Maximize your wealth with strategic financial planning.",
        "Embrace a journey towards financial prosperity and security.",
        "Empower your financial decisions with our knowledgeable team.",
        "Chart a course for financial success with our tailored services.",
        "Secure your future with intelligent and personalized financial solutions.",
        "Unleash the potential of your assets with our comprehensive strategies.",
        "Experience the difference of dedicated financial guidance.",
        "Navigate the financial landscape with our seasoned expertise.",
        "Elevate your financial outlook through innovative solutions.",
        "Ensure a brighter tomorrow with our strategic financial advice.",
        "Optimize your investments with our insightful financial planning.",
        "Embark on a path to financial well-being with our support.",
        "Transform your financial goals into reality with our assistance.",
        "Redefine your financial future with our trusted advisory services.",
        "Simplify your financial journey with our expert guidance."
    ];
    
    var objectsContainer;
    var objectsToAnimate;

    var introContainer = $(".animatedIntro").find(".animeP");
    $(objectsContainer).empty();
    objectsContainer = introContainer;
    objectsToAnimate = introToAnimate;
    animateObjects(objectsContainer,objectsToAnimate);


    var partnersContainer = $(".animatedContent").find(".animeP");
    $(objectsContainer).empty();
    objectsContainer = partnersContainer;
    objectsToAnimate = partnersToAnimate;
    animateObjects(objectsContainer,objectsToAnimate);


    function animateObjects(objectsContainer,objectsToAnimate){
        if (objectsContainer.length > 0) {
            // Function to animate text
            function animateText(text) {
                $(objectsContainer).empty(); // Clear the container
        
                // Display each character of the text with a delay
                for (var i = 0; i < text.length; i++) {
                    setTimeout(function (index) {
                        return function () {
                            $(objectsContainer).append(text[index]);
                        };
                    }(i), i * 100); // Adjust the delay as needed
                }
        
                // Add class after the text is fully displayed
                setTimeout(function () {
                    $(objectsContainer).addClass("animePText");
                }, text.length * 100); // Adjust the delay based on the text length
            }
        
            // Iterate through sentences and display them one at a time
            objectsToAnimate.forEach(function (text, index) {
                setTimeout(function () {
                    animateText(text);
                }, index * 10000); // Display each sentence for 10 seconds, adjust as needed
            });
        }
    }
    
});
