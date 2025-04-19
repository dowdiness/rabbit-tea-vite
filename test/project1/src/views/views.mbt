///|
pub fn button[M](value : String, msg : M) -> Html[M] {
  let class =
    #| p-4 bg-pink-200 w-24 rounded-lg select-none text-center 
    #| hover:-translate-y-1 hover:shadow-lg active:bg-pink-300 
    #| active:shadow-sm transition-all
  div(click=msg, class~, [text(value)])
}
