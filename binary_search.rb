def bSearch(arr, target)
 return nil if arr.length == 0

 mid_idx = arr.length / 2

 if target = arr[mid_idx]
   return mid_idx
 elsif target < arr[mid_idx]
   bSearch(arr[0...mid_idx])
 else
   x = bSearch(arr[mid_idx+1..-1])
   if x.nil?
     return nil
   else
     return x + mid + 1
   end
 end
end

arr = [1, 2, 3, 4, 5]
target = 4

puts bSearch(arr, target)