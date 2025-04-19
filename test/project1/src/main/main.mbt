///|
pub(all) enum Message {
  /// adsfadsf
  /// adsadsfasdf
  /// adsfasdf
  Increment
  /// asdfasdf
  /// asdfasdfasdf
  /// adfadsfasd
  Decrement
  // Ubc(Int, Bool)
}

///|
priv struct Model {
  count : Int
}

///|
fn update(msg : Message, model : Model) -> (Command[Message], Model) {
  match msg {
    Increment => (none(), { count: model.count + 1 })
    Decrement => (none(), { count: @math.maximum(0, model.count - 1) })
    // _ => ...
  }
}

///|
fn view(model : Model) -> Html[Message] {
  div(class="w-[600px] h-[100px] m-10", [
    h1(class="text-2xl font-bold text-center select-none", [
      text("\{model.count}"),
    ]),
    div(class="flex justify-center gap-8 m-8", [
      @views.button("+", Increment),
      @views.button("-", Decrement),
    ]),
  ])
}

///| NOTE: This program is only available in the js backend, 
/// see README.md to getting started.
fn main {
  let model = { count: 0 }
  @tea.startup(model~, update~, view~)
}
