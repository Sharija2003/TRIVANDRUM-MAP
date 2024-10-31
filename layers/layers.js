ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([8515483.768522, 906403.577623, 8600803.004702, 994323.400135]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_TVM_1 = new ol.format.GeoJSON();
var features_TVM_1 = format_TVM_1.readFeatures(json_TVM_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TVM_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TVM_1.addFeatures(features_TVM_1);
var lyr_TVM_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TVM_1, 
                style: style_TVM_1,
                popuplayertitle: "TVM",
                interactive: false,
                title: '<img src="styles/legend/TVM_1.png" /> TVM'
            });
var format_clip_SOIL_2 = new ol.format.GeoJSON();
var features_clip_SOIL_2 = format_clip_SOIL_2.readFeatures(json_clip_SOIL_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clip_SOIL_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clip_SOIL_2.addFeatures(features_clip_SOIL_2);
var lyr_clip_SOIL_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clip_SOIL_2, 
                style: style_clip_SOIL_2,
                popuplayertitle: "clip_SOIL",
                interactive: false,
    title: 'clip_SOIL<br />\
    <img src="styles/legend/clip_SOIL_2_0.png" /> clay<br />\
    <img src="styles/legend/clip_SOIL_2_1.png" /> gravelly clay<br />\
    <img src="styles/legend/clip_SOIL_2_2.png" /> gravelly loam<br />\
    <img src="styles/legend/clip_SOIL_2_3.png" /> loam<br />\
    <img src="styles/legend/clip_SOIL_2_4.png" /> sandy<br />\
    <img src="styles/legend/clip_SOIL_2_5.png" /> <br />'
        });
var format_clip_railways_3 = new ol.format.GeoJSON();
var features_clip_railways_3 = format_clip_railways_3.readFeatures(json_clip_railways_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clip_railways_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clip_railways_3.addFeatures(features_clip_railways_3);
var lyr_clip_railways_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clip_railways_3, 
                style: style_clip_railways_3,
                popuplayertitle: "clip_railways",
                interactive: false,
                title: '<img src="styles/legend/clip_railways_3.png" /> clip_railways'
            });
var format_clip_DRAINAGE_4 = new ol.format.GeoJSON();
var features_clip_DRAINAGE_4 = format_clip_DRAINAGE_4.readFeatures(json_clip_DRAINAGE_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clip_DRAINAGE_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clip_DRAINAGE_4.addFeatures(features_clip_DRAINAGE_4);
var lyr_clip_DRAINAGE_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clip_DRAINAGE_4, 
                style: style_clip_DRAINAGE_4,
                popuplayertitle: "clip_DRAINAGE",
                interactive: false,
                title: '<img src="styles/legend/clip_DRAINAGE_4.png" /> clip_DRAINAGE'
            });
var format_beaches_5 = new ol.format.GeoJSON();
var features_beaches_5 = format_beaches_5.readFeatures(json_beaches_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_beaches_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_beaches_5.addFeatures(features_beaches_5);
var lyr_beaches_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_beaches_5, 
                style: style_beaches_5,
                popuplayertitle: "beaches",
                interactive: true,
                title: '<img src="styles/legend/beaches_5.png" /> beaches'
            });
var format_clip_Road_6 = new ol.format.GeoJSON();
var features_clip_Road_6 = format_clip_Road_6.readFeatures(json_clip_Road_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clip_Road_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clip_Road_6.addFeatures(features_clip_Road_6);
var lyr_clip_Road_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clip_Road_6, 
                style: style_clip_Road_6,
                popuplayertitle: "clip_Road",
                interactive: false,
                title: '<img src="styles/legend/clip_Road_6.png" /> clip_Road'
            });
var format_junctionclip_7 = new ol.format.GeoJSON();
var features_junctionclip_7 = format_junctionclip_7.readFeatures(json_junctionclip_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_junctionclip_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_junctionclip_7.addFeatures(features_junctionclip_7);
var lyr_junctionclip_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_junctionclip_7, 
                style: style_junctionclip_7,
                popuplayertitle: "junction clip",
                interactive: false,
                title: '<img src="styles/legend/junctionclip_7.png" /> junction clip'
            });

lyr_OSMStandard_0.setVisible(true);lyr_TVM_1.setVisible(true);lyr_clip_SOIL_2.setVisible(true);lyr_clip_railways_3.setVisible(true);lyr_clip_DRAINAGE_4.setVisible(true);lyr_beaches_5.setVisible(true);lyr_clip_Road_6.setVisible(true);lyr_junctionclip_7.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_TVM_1,lyr_clip_SOIL_2,lyr_clip_railways_3,lyr_clip_DRAINAGE_4,lyr_beaches_5,lyr_clip_Road_6,lyr_junctionclip_7];
lyr_TVM_1.set('fieldAliases', {'admin_leve': 'admin_leve', 'alt_name': 'alt_name', 'boundary': 'boundary', 'name': 'name', 'name_ar': 'name_ar', 'name_kn': 'name_kn', 'name_ml': 'name_ml', 'name_ta': 'name_ta', 'name_ur': 'name_ur', 'official_n': 'official_n', 'type': 'type', 'wikidata': 'wikidata', 'wikipedia': 'wikipedia', });
lyr_clip_SOIL_2.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'KERSOIL_': 'KERSOIL_', 'KERSOIL_ID': 'KERSOIL_ID', 'CODE': 'CODE', 'MAP_SYMBOL': 'MAP_SYMBOL', 'DEPTH': 'DEPTH', 'TEXTURE': 'TEXTURE', 'SLOPE': 'SLOPE', 'DRAINAGE': 'DRAINAGE', });
lyr_clip_railways_3.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'type': 'type', });
lyr_clip_DRAINAGE_4.set('fieldAliases', {'ORDER1': 'ORDER1', });
lyr_beaches_5.set('fieldAliases', {'id': 'id', 'BEACHES': 'BEACHES', 'PHOTO': 'PHOTO', });
lyr_clip_Road_6.set('fieldAliases', {'NAME': 'NAME', 'Length': 'Length', });
lyr_junctionclip_7.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Jn_Name': 'Jn_Name', 'District': 'District', 'Name': 'Name', });
lyr_TVM_1.set('fieldImages', {'admin_leve': 'TextEdit', 'alt_name': 'TextEdit', 'boundary': 'TextEdit', 'name': 'TextEdit', 'name_ar': 'TextEdit', 'name_kn': 'TextEdit', 'name_ml': 'TextEdit', 'name_ta': 'TextEdit', 'name_ur': 'TextEdit', 'official_n': 'TextEdit', 'type': 'TextEdit', 'wikidata': 'TextEdit', 'wikipedia': 'TextEdit', });
lyr_clip_SOIL_2.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'KERSOIL_': 'Range', 'KERSOIL_ID': 'Range', 'CODE': 'Range', 'MAP_SYMBOL': 'TextEdit', 'DEPTH': 'TextEdit', 'TEXTURE': 'TextEdit', 'SLOPE': 'TextEdit', 'DRAINAGE': 'TextEdit', });
lyr_clip_railways_3.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', });
lyr_clip_DRAINAGE_4.set('fieldImages', {'ORDER1': 'Range', });
lyr_beaches_5.set('fieldImages', {'id': 'TextEdit', 'BEACHES': 'TextEdit', 'PHOTO': 'ExternalResource', });
lyr_clip_Road_6.set('fieldImages', {'NAME': 'TextEdit', 'Length': 'TextEdit', });
lyr_junctionclip_7.set('fieldImages', {'fid': 'TextEdit', 'Id': 'Range', 'Jn_Name': 'TextEdit', 'District': 'TextEdit', 'Name': 'TextEdit', });
lyr_TVM_1.set('fieldLabels', {'admin_leve': 'no label', 'alt_name': 'no label', 'boundary': 'no label', 'name': 'no label', 'name_ar': 'no label', 'name_kn': 'no label', 'name_ml': 'no label', 'name_ta': 'no label', 'name_ur': 'no label', 'official_n': 'no label', 'type': 'no label', 'wikidata': 'no label', 'wikipedia': 'no label', });
lyr_clip_SOIL_2.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'KERSOIL_': 'no label', 'KERSOIL_ID': 'no label', 'CODE': 'no label', 'MAP_SYMBOL': 'no label', 'DEPTH': 'no label', 'TEXTURE': 'no label', 'SLOPE': 'no label', 'DRAINAGE': 'no label', });
lyr_clip_railways_3.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'type': 'no label', });
lyr_clip_DRAINAGE_4.set('fieldLabels', {'ORDER1': 'no label', });
lyr_beaches_5.set('fieldLabels', {'id': 'no label', 'BEACHES': 'inline label - always visible', 'PHOTO': 'no label', });
lyr_clip_Road_6.set('fieldLabels', {'NAME': 'no label', 'Length': 'no label', });
lyr_junctionclip_7.set('fieldLabels', {'fid': 'no label', 'Id': 'no label', 'Jn_Name': 'no label', 'District': 'no label', 'Name': 'no label', });
lyr_junctionclip_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});