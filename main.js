document.addEventListener('load', function() {
    fetchPrayerTimes();
});

function fetchPrayerTimes() {
    const region = document.getElementById("region").value;
    const web = `https://islomapi.uz/api/present/day?region=${region}`;

    fetch(web)
        .then(response => response.json())
        .then(data => {
            document.getElementById("bomdod").textContent = data.times.tong_saharlik;
            document.getElementById("peshin").textContent = data.times.peshin;
            document.getElementById("asr").textContent = data.times.asr;
            document.getElementById("shom").textContent = data.times.shom_iftor;
            document.getElementById("xufton").textContent = data.times.hufton;
        })
        .catch(error => console.error('Error fetching data:', error));
}

