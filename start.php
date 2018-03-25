<?php

elgg_register_event_handler('init', 'system', 'hammertime_init');

function hammertime_init() {
	elgg_extend_view('navigation/pagination', 'hammertime/hammertime');
	elgg_extend_view('object/image/navigation', 'hammertime/hammertime');
}
