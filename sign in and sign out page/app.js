const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
var terms_and_condition = document.getElementById("terms-and-condition");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

terms_and_condition.addEventListener("click",() => {
  alert("Welcome To anicare: \n \n \nThese Terms & Conditions govern your use of AniCare and the products, features, services, technologies and software that we offer.\nThese Terms and the Data Policy together constitute a legal agreement (“Agreement”) between you and AniCare in connection with your visit to the Website and your use of the Services.\nThe Agreement applies to you whether you are -\n A service provider (whether an individual professional or an organization) or similar institution wishing to be listed, or already listed, on the Website, including pet trainer, pet walker, pet sitter, pet groomer, lodging and boarding service provider, veterinary doctor or any other service provider in connection with pets as well as strays (“Service Provider(s)”, “you” or “user”); or\n Otherwise a user of the Website and the services provided there in (“you” or “User”).\nThis Agreement applies to those services made available by PetKonnect on the Website or application, which are offered free of charge to the Users (“Services”), including the following:\nFor Service Providers: Listing of Service Providers and their profiles and contact details, to be made available to the other Users and visitors to the Website;\nFor other Users: Facility to\n(i) create and maintain profiles for their pets,\n(ii) maintain online health records,\n(iii) create vaccination records and reminders for your pets,\n(iv) register your pet with the government authorities,\n(v) find and befriend other pets as a part of a social network for animals,\n(vi) share photos of your pets with its friends as well as maintain an online photo gallery,\n(vii) search for Service providers by name, specialty, and geographical area, or any other criteria,\n(viii) access emergency information including ambulances, both for pets as well as strays and,\n(ix) be a part of the bloodline – a community enabling timely access to donor animals in cases of emergencies,</p>")
});
