# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

place = Place.new(name: "Starbucks", address: "123 Main St, New York, NY 10010")
place.save

place = Place.new(name: "Dunkin Donuts", address: "123 Bond St, New York, NY 10010")
place.save

place = Place.new(name: "McDonalds", address: "123 Lafayette St, New York, NY 10010")
place.save