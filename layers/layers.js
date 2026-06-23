var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 4.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_Jalan_1 = new ol.format.GeoJSON();
var features_Jalan_1 = format_Jalan_1.readFeatures(json_Jalan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_1.addFeatures(features_Jalan_1);
var lyr_Jalan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_1, 
                style: style_Jalan_1,
                popuplayertitle: 'Jalan',
                interactive: false,
                title: '<img src="styles/legend/Jalan_1.png" /> Jalan'
            });
var format_ServiceArea800m_2 = new ol.format.GeoJSON();
var features_ServiceArea800m_2 = format_ServiceArea800m_2.readFeatures(json_ServiceArea800m_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ServiceArea800m_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServiceArea800m_2.addFeatures(features_ServiceArea800m_2);
var lyr_ServiceArea800m_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServiceArea800m_2, 
                style: style_ServiceArea800m_2,
                popuplayertitle: 'Service Area 800m',
                interactive: true,
                title: '<img src="styles/legend/ServiceArea800m_2.png" /> Service Area 800m'
            });
var format_ServiceArea400m_3 = new ol.format.GeoJSON();
var features_ServiceArea400m_3 = format_ServiceArea400m_3.readFeatures(json_ServiceArea400m_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ServiceArea400m_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServiceArea400m_3.addFeatures(features_ServiceArea400m_3);
var lyr_ServiceArea400m_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServiceArea400m_3, 
                style: style_ServiceArea400m_3,
                popuplayertitle: 'Service Area 400m',
                interactive: true,
                title: '<img src="styles/legend/ServiceArea400m_3.png" /> Service Area 400m'
            });
var format_DelineasiWilayah_4 = new ol.format.GeoJSON();
var features_DelineasiWilayah_4 = format_DelineasiWilayah_4.readFeatures(json_DelineasiWilayah_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DelineasiWilayah_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DelineasiWilayah_4.addFeatures(features_DelineasiWilayah_4);
var lyr_DelineasiWilayah_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DelineasiWilayah_4, 
                style: style_DelineasiWilayah_4,
                popuplayertitle: 'Delineasi Wilayah',
                interactive: false,
                title: '<img src="styles/legend/DelineasiWilayah_4.png" /> Delineasi Wilayah'
            });
var format_Stasiun_5 = new ol.format.GeoJSON();
var features_Stasiun_5 = format_Stasiun_5.readFeatures(json_Stasiun_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stasiun_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stasiun_5.addFeatures(features_Stasiun_5);
var lyr_Stasiun_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Stasiun_5, 
                style: style_Stasiun_5,
                popuplayertitle: 'Stasiun',
                interactive: true,
    title: 'Stasiun<br />\
    <img src="styles/legend/Stasiun_5_0.png" /> Stasiun BNI City<br />\
    <img src="styles/legend/Stasiun_5_1.png" /> Stasiun Cikini<br />\
    <img src="styles/legend/Stasiun_5_2.png" /> Stasiun Gambir<br />\
    <img src="styles/legend/Stasiun_5_3.png" /> Stasiun Gang Sentiong<br />\
    <img src="styles/legend/Stasiun_5_4.png" /> Stasiun Gondangdia<br />\
    <img src="styles/legend/Stasiun_5_5.png" /> Stasiun Jayakarta<br />\
    <img src="styles/legend/Stasiun_5_6.png" /> Stasiun Juanda<br />\
    <img src="styles/legend/Stasiun_5_7.png" /> Stasiun Karet<br />\
    <img src="styles/legend/Stasiun_5_8.png" /> Stasiun Kemayoran<br />\
    <img src="styles/legend/Stasiun_5_9.png" /> Stasiun Kramat<br />\
    <img src="styles/legend/Stasiun_5_10.png" /> Stasiun Mangga Besar<br />\
    <img src="styles/legend/Stasiun_5_11.png" /> Stasiun Palmerah<br />\
    <img src="styles/legend/Stasiun_5_12.png" /> Stasiun Pasar Senen<br />\
    <img src="styles/legend/Stasiun_5_13.png" /> Stasiun Rajawali<br />\
    <img src="styles/legend/Stasiun_5_14.png" /> Stasiun Sawah Besar<br />\
    <img src="styles/legend/Stasiun_5_15.png" /> Stasiun Sudirman<br />\
    <img src="styles/legend/Stasiun_5_16.png" /> Stasiun Tanah Abang<br />' });

lyr_Positron_0.setVisible(true);lyr_Jalan_1.setVisible(true);lyr_ServiceArea800m_2.setVisible(true);lyr_ServiceArea400m_3.setVisible(true);lyr_DelineasiWilayah_4.setVisible(true);lyr_Stasiun_5.setVisible(true);
var layersList = [lyr_Positron_0,lyr_Jalan_1,lyr_ServiceArea800m_2,lyr_ServiceArea400m_3,lyr_DelineasiWilayah_4,lyr_Stasiun_5];
lyr_Jalan_1.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_ServiceArea800m_2.set('fieldAliases', {'id': 'id', 'Stasiun': 'Stasiun', 'NAME_2': 'Wilayah', 'type': 'type', 'start': 'start', 'Jangkauan': 'Jangkauan', });
lyr_ServiceArea400m_3.set('fieldAliases', {'id': 'id', 'Stasiun': 'Stasiun', 'NAME_2': 'NAME_2', 'type': 'type', 'start': 'start', 'Jangkauan': 'Jangkauan', });
lyr_DelineasiWilayah_4.set('fieldAliases', {'NAME_2': 'NAME_2', });
lyr_Stasiun_5.set('fieldAliases', {'id': 'id', 'Stasiun': 'Stasiun', 'NAME_2': 'Wilayah', 'Foto': 'Foto', });
lyr_Jalan_1.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'Range', 'MATRJL': 'Range', 'FGSRJL': 'Range', 'UTKRJL': 'Range', 'TOLRJL': 'Range', 'WLYRJL': 'Range', 'AUTRJL': 'Range', 'KLSRJL': 'Range', 'SPCRJL': 'Range', 'JPARJL': 'Range', 'ARHRJL': 'Range', 'STARJL': 'Range', 'KLLRJL': 'TextEdit', 'MEDRJL': 'Range', 'LOCRJL': 'Range', 'JARRJL': 'Range', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_ServiceArea800m_2.set('fieldImages', {'id': 'Hidden', 'Stasiun': 'Hidden', 'NAME_2': 'Hidden', 'type': 'Hidden', 'start': 'Hidden', 'Jangkauan': 'TextEdit', });
lyr_ServiceArea400m_3.set('fieldImages', {'id': 'Hidden', 'Stasiun': 'Hidden', 'NAME_2': 'Hidden', 'type': 'Hidden', 'start': 'Hidden', 'Jangkauan': 'TextEdit', });
lyr_DelineasiWilayah_4.set('fieldImages', {'NAME_2': 'TextEdit', });
lyr_Stasiun_5.set('fieldImages', {'id': 'TextEdit', 'Stasiun': 'TextEdit', 'NAME_2': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_Jalan_1.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_ServiceArea800m_2.set('fieldLabels', {'Jangkauan': 'inline label - always visible', });
lyr_ServiceArea400m_3.set('fieldLabels', {'Jangkauan': 'inline label - always visible', });
lyr_DelineasiWilayah_4.set('fieldLabels', {'NAME_2': 'no label', });
lyr_Stasiun_5.set('fieldLabels', {'id': 'no label', 'Stasiun': 'inline label - always visible', 'NAME_2': 'inline label - always visible', 'Foto': 'inline label - always visible', });
lyr_Stasiun_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});