# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Post.destroy_all
User.destroy_all

@admin = User.create!(username: 'test', email: 'test@test.com', password: 'zxcvb', image_url: 'test.jpg')
@admin2 = User.create!(username: 'vivi', email: 'test2@test.com', password: '123456', image_url: 'test.jpg')
puts "#{User.count} users created!"

5.times do
    Post.create!(title: Faker::Lorem.words(number: 3), content: Faker::Lorem.paragraph(sentence_count: 4), image_url: Faker::Internet.url, user_id: @admin.id)
end

puts "#{Post.count} posts created!"

Post.all.each do |post|
    5.times do
        Comment.create!(content: Faker::Lorem.paragraph(sentence_count: 2), post_id: post.id, user_id: @admin.id)
    end
end

puts "#{Comment.count} comments created!"


Comment.create!(content: "This is a test comment", post_id: 10, user_id: 10)