<?php

function prepare_data($block_data) {
    $new_block_data = [];
    
    foreach($block_data as $block) {
        $new_block = $block;
        if ($block['blockName'] == 'acf/dark-interstitial'){

            // die(var_dump($block));
            $images = [];
            $howManyImages = $block['attrs']['data']['images'];
            for($i = 0; $i < $howManyImages; $i++){
                $images[] = ['caption' => $block['attrs']['data']["images_{$i}_caption"], 'url' => wp_get_attachment_url($block['attrs']['data']["images_{$i}_image"])];
            }
            $new_block['attrs']['data']['images'] = $images;
           
        }

        $new_block_data[] = $new_block;
    }

    return $new_block_data;
}