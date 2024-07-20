function initMap() {
    // Coordenadas de Blumenau
    var blumenau = { lat: -26.9194, lng: -49.0661 };
    // Locais dos eventos
    var locaisEventos = [
        { lat: -26.915336526899207, lng: -49.08466279295516, titulo: 'Oktoberfest Blumenau 2024', descricao: 'Evento pago' },
        { lat: -26.915380643773254, lng: -49.08460813157637, titulo: 'BCX Blumenau', descricao: 'Evento pago' },
        { lat: -26.915380643773254, lng: -49.05698754692079, titulo: 'Festival 200 Anos da Imigração Alemã no Brasil', descricao: 'Evento gratuito' },

         
         
    ];
    // Criação do mapa
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: blumenau
    });
    // Adicionando marcadores no mapa
    locaisEventos.forEach(function(evento) {
        var marker = new google.maps.Marker({
            position: { lat: evento.lat, lng: evento.lng },
            map: map,
            title: evento.titulo
        });
        var infowindow = new google.maps.InfoWindow({
            content: '<h5>' + evento.titulo + '</h5><p>' + evento.descricao + '</p>'
        });
        marker.addListener('click', function() {
            infowindow.open(map, marker);
        });
    });
}
 