def on_forever():
    basic.show_string(custom.find_is_greater_or_less(1, 0))
    basic.show_arrow(ArrowNames.WEST)
    basic.show_arrow(ArrowNames.EAST)
    basic.show_arrow(ArrowNames.WEST)
    basic.show_arrow(ArrowNames.EAST)
basic.forever(on_forever)
