define(["qlik"],
    function(qlik) {
        'use strict';
        return {
            definition: {
                type: "items",
                component: "accordion",
                items: {
                    iconAppearance: {
                        type: "items",
                        label: "URL",
                        items: {
                            v_icon_url: {
                                ref: "v_url",
                                label: "URL",
                                type: "string",
                                defaultValue: "",
                                expression: "always"
                            }
                        }
                    }
                }
            },

            paint: function($element, layout) {
                //add your rendering code here

                var myHTML = '<div style="margin:0px;padding:0px;overflow:hidden; height:100%;width:100%">';
                myHTML += '<iframe class="container" src="' + layout.v_url + '" frameborder="0" style="overflow:hidden;height:100%;width:100%" height="100%" width="100%" ></iframe>';
                myHTML += '</div>';

                $element.html(myHTML);
				
                //needed for export
                return qlik.Promise.resolve();
            }
        };

    });