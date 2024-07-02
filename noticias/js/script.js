function initMap() {
    // Coordenadas de Blumenau
    var blumenau = { lat: -26.9194, lng: -49.0661 };
    // Locais dos eventos
    var locaisEventos = [
        { lat: -26.911878271680553, lng: -49.071414926383675, titulo: 'Dia Mundial do Rock', descricao: 'Evento pago' },
        { lat: -26.915323243886295, lng: -49.084651045397436, titulo: 'BCX segunda edição', descricao: 'Evento pago' },
        { lat: -26.898083614578987, lng: -49.07777561841287, titulo: 'Especial dia do Motociclista', descricao: 'Evento gratuito' },
        { lat: -26.862052891847945, lng: -49.09270887426063, titulo: 'Circo Aquático', descricao: 'Evento pago' },
        { lat: -26.918497779235672, lng: -49.06807976074078, titulo: 'FENATIB', descricao: 'Evento gratuito' },
        { lat: -26.899380272916297, lng: -49.07570424909913, titulo: '1º Norden Wurstfest', descricao: 'Evento pago' },
        { lat: -26.919111553233204, lng: -49.069030392538124, titulo: 'Feira Brique de Blumenau', descricao: 'Evento gratuito' },
        { lat: -26.809684260528762, lng: -49.087101777937875, titulo: 'Sunset Container British Beer', descricao: 'Evento gratuito' },
        { lat: -26.898007069659787, lng: -49.07768978772652, titulo: 'TubaFest', descricao: 'Evento gratuito' },
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
 