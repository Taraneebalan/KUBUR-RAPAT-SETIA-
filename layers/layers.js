ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([101.127910, 4.559735, 101.130959, 4.561289]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_KAWASANKUBUR_1 = new ol.format.GeoJSON();
var features_KAWASANKUBUR_1 = format_KAWASANKUBUR_1.readFeatures(json_KAWASANKUBUR_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_KAWASANKUBUR_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KAWASANKUBUR_1.addFeatures(features_KAWASANKUBUR_1);
var lyr_KAWASANKUBUR_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KAWASANKUBUR_1, 
                style: style_KAWASANKUBUR_1,
                popuplayertitle: "KAWASAN KUBUR",
                interactive: true,
                title: '<img src="styles/legend/KAWASANKUBUR_1.png" /> KAWASAN KUBUR'
            });
var format_BANGUNAN_2 = new ol.format.GeoJSON();
var features_BANGUNAN_2 = format_BANGUNAN_2.readFeatures(json_BANGUNAN_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BANGUNAN_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANGUNAN_2.addFeatures(features_BANGUNAN_2);
var lyr_BANGUNAN_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BANGUNAN_2, 
                style: style_BANGUNAN_2,
                popuplayertitle: "BANGUNAN",
                interactive: true,
                title: '<img src="styles/legend/BANGUNAN_2.png" /> BANGUNAN'
            });
var format_JALAN_3 = new ol.format.GeoJSON();
var features_JALAN_3 = format_JALAN_3.readFeatures(json_JALAN_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_JALAN_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_3.addFeatures(features_JALAN_3);
var lyr_JALAN_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALAN_3, 
                style: style_JALAN_3,
                popuplayertitle: "JALAN",
                interactive: true,
                title: '<img src="styles/legend/JALAN_3.png" /> JALAN'
            });
var format_LOTKUBUR_4 = new ol.format.GeoJSON();
var features_LOTKUBUR_4 = format_LOTKUBUR_4.readFeatures(json_LOTKUBUR_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_LOTKUBUR_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOTKUBUR_4.addFeatures(features_LOTKUBUR_4);
var lyr_LOTKUBUR_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOTKUBUR_4, 
                style: style_LOTKUBUR_4,
                popuplayertitle: "LOT KUBUR",
                interactive: true,
                title: '<img src="styles/legend/LOTKUBUR_4.png" /> LOT KUBUR'
            });
var format_point1_5 = new ol.format.GeoJSON();
var features_point1_5 = format_point1_5.readFeatures(json_point1_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_point1_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_point1_5.addFeatures(features_point1_5);
var lyr_point1_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_point1_5, 
                style: style_point1_5,
                popuplayertitle: "point (1)",
                interactive: true,
                title: '<img src="styles/legend/point1_5.png" /> point (1)'
            });
var format_PAGARKONKRIT_6 = new ol.format.GeoJSON();
var features_PAGARKONKRIT_6 = format_PAGARKONKRIT_6.readFeatures(json_PAGARKONKRIT_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PAGARKONKRIT_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PAGARKONKRIT_6.addFeatures(features_PAGARKONKRIT_6);
var lyr_PAGARKONKRIT_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PAGARKONKRIT_6, 
                style: style_PAGARKONKRIT_6,
                popuplayertitle: "PAGAR KONKRIT",
                interactive: true,
                title: '<img src="styles/legend/PAGARKONKRIT_6.png" /> PAGAR KONKRIT'
            });
var format_LONGKANGKONKRIT_7 = new ol.format.GeoJSON();
var features_LONGKANGKONKRIT_7 = format_LONGKANGKONKRIT_7.readFeatures(json_LONGKANGKONKRIT_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_LONGKANGKONKRIT_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LONGKANGKONKRIT_7.addFeatures(features_LONGKANGKONKRIT_7);
var lyr_LONGKANGKONKRIT_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LONGKANGKONKRIT_7, 
                style: style_LONGKANGKONKRIT_7,
                popuplayertitle: "LONGKANG KONKRIT",
                interactive: true,
                title: '<img src="styles/legend/LONGKANGKONKRIT_7.png" /> LONGKANG KONKRIT'
            });
var format_PAPANTANDA_8 = new ol.format.GeoJSON();
var features_PAPANTANDA_8 = format_PAPANTANDA_8.readFeatures(json_PAPANTANDA_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PAPANTANDA_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PAPANTANDA_8.addFeatures(features_PAPANTANDA_8);
var lyr_PAPANTANDA_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PAPANTANDA_8, 
                style: style_PAPANTANDA_8,
                popuplayertitle: "PAPAN TANDA",
                interactive: true,
                title: '<img src="styles/legend/PAPANTANDA_8.png" /> PAPAN TANDA'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_KAWASANKUBUR_1.setVisible(true);lyr_BANGUNAN_2.setVisible(true);lyr_JALAN_3.setVisible(true);lyr_LOTKUBUR_4.setVisible(true);lyr_point1_5.setVisible(true);lyr_PAGARKONKRIT_6.setVisible(true);lyr_LONGKANGKONKRIT_7.setVisible(true);lyr_PAPANTANDA_8.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_KAWASANKUBUR_1,lyr_BANGUNAN_2,lyr_JALAN_3,lyr_LOTKUBUR_4,lyr_point1_5,lyr_PAGARKONKRIT_6,lyr_LONGKANGKONKRIT_7,lyr_PAPANTANDA_8];
lyr_KAWASANKUBUR_1.set('fieldAliases', {'ID': 'ID', });
lyr_BANGUNAN_2.set('fieldAliases', {'ID': 'ID', 'NAME': 'NAME', });
lyr_JALAN_3.set('fieldAliases', {'ID': 'ID', });
lyr_LOTKUBUR_4.set('fieldAliases', {'id': 'id', 'B.KUBUR': 'B.KUBUR', 'layer': 'layer', 'path': 'path', 'NAMA ARWAH': 'NAMA ARWAH', 'TARIKH KEM': 'TARIKH KEM', 'JANTINA': 'JANTINA', });
lyr_point1_5.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_PAGARKONKRIT_6.set('fieldAliases', {'qc_id': 'qc_id', 'pagar': 'pagar', });
lyr_LONGKANGKONKRIT_7.set('fieldAliases', {'qc_id': 'qc_id', 'id': 'id', });
lyr_PAPANTANDA_8.set('fieldAliases', {'qc_id': 'qc_id', 'jnis tanda': 'jnis tanda', });
lyr_KAWASANKUBUR_1.set('fieldImages', {'ID': '', });
lyr_BANGUNAN_2.set('fieldImages', {'ID': 'TextEdit', 'NAME': 'TextEdit', });
lyr_JALAN_3.set('fieldImages', {'ID': 'TextEdit', });
lyr_LOTKUBUR_4.set('fieldImages', {'id': 'TextEdit', 'B.KUBUR': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'NAMA ARWAH': 'TextEdit', 'TARIKH KEM': 'TextEdit', 'JANTINA': 'TextEdit', });
lyr_point1_5.set('fieldImages', {'Layer': '', 'PaperSpace': '', 'SubClasses': '', 'Linetype': '', 'EntityHand': '', 'Text': '', });
lyr_PAGARKONKRIT_6.set('fieldImages', {'qc_id': 'TextEdit', 'pagar': 'TextEdit', });
lyr_LONGKANGKONKRIT_7.set('fieldImages', {'qc_id': 'TextEdit', 'id': 'TextEdit', });
lyr_PAPANTANDA_8.set('fieldImages', {'qc_id': '', 'jnis tanda': '', });
lyr_KAWASANKUBUR_1.set('fieldLabels', {'ID': 'inline label - always visible', });
lyr_BANGUNAN_2.set('fieldLabels', {'ID': 'inline label - always visible', 'NAME': 'inline label - always visible', });
lyr_JALAN_3.set('fieldLabels', {'ID': 'inline label - always visible', });
lyr_LOTKUBUR_4.set('fieldLabels', {'id': 'inline label - always visible', 'B.KUBUR': 'inline label - always visible', 'layer': 'inline label - always visible', 'path': 'inline label - always visible', 'NAMA ARWAH': 'inline label - always visible', 'TARIKH KEM': 'inline label - always visible', 'JANTINA': 'inline label - always visible', });
lyr_point1_5.set('fieldLabels', {'Layer': 'inline label - always visible', 'PaperSpace': 'inline label - always visible', 'SubClasses': 'inline label - always visible', 'Linetype': 'inline label - always visible', 'EntityHand': 'inline label - always visible', 'Text': 'inline label - always visible', });
lyr_PAGARKONKRIT_6.set('fieldLabels', {'qc_id': 'inline label - always visible', 'pagar': 'inline label - always visible', });
lyr_LONGKANGKONKRIT_7.set('fieldLabels', {'qc_id': 'inline label - always visible', 'id': 'inline label - always visible', });
lyr_PAPANTANDA_8.set('fieldLabels', {'qc_id': 'inline label - always visible', 'jnis tanda': 'inline label - always visible', });
lyr_PAPANTANDA_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});